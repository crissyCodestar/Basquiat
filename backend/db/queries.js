var db = require("./index");
var bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


getAllUsers = (req, res, next) => {
  db
    .any("select * from users")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Crystal has Retrieved ALL users"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

signup = (req, res) => {
  console.log("signup", req.body);

  bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        db.any('INSERT INTO users (full_name, username, password_digest, email) VALUES (${full_name}, ${username}, ${password}, ${email})', {
          full_name: req.body.full_name,
          username: req.body.username,
          email:req.body.email,
          password: hash,
        })
        .then(() => {
          console.log(`created user: ${req.body.username}`);
          res.send(`created user: ${req.body.username}`);

        })
          .catch(err => {
            console.log('Create User Error: ',err.message, err.res);
            res.status(500).send('error creating user')
          })
        })
  })
}

updateProfile = (req, res) => {
  const id = req.params.user_id
    db.one('UPDATE user SET full_name=($1), username=($2), email=($3), profile_pic_url=($4),WHERE id=($5)',
  {full_name: req.body.full_name,
  username: req.body.username,
  email:req.body.email,
  profile_pic_url:req.body.profile_pic,
  id
})
  .then(()=> {
    console.log(`updated user: ${req.body.username}`);
    res.send(`updated user: ${req.body.username}`);
  })
  .catch(err => {
    console.log('Update User Error: ',err.message, err.res);
    res.status(500).send('error updating user')
  })
}


// signinUser = (res, req) =>{
//   new LocalStrategy(options, (username, password, done) => {
//    console.log("trying to authenticate");
//    db.any("SELECT * FROM users WHERE username=$1", [username])
//      .then(rows => {
//        const user = rows[0];
//        console.log("user: ", user);
//        if (!user) {
//          return done(null, false);
//        }
//        if (!bcrypt.compare(password, user.password_digest)) {
//          return done(null, false);
//        } else {
//          return done(null, user);
//        }
//      })
//      .catch(err => {
//        console.log("error: ", err);
//        return done(err);
//      });
//  })
// }



module.exports = {
signup,
getAllUsers,
updateProfile,
}

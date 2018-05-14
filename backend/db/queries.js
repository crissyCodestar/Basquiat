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
signupuUser = (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        db.any('INSERT INTO users (first_name, last_name, username, password_digest, email) VALUES (${firstName}, ${lastName}, ${username}, ${password}, ${email})', {
          firstName: req.body.firstName,
          lastName:req.body.lastName,
          username: req.body.username,
          email:req.body.email,
          password: hash,
        })
        .then(() => {

          res.send(`created user: ${req.body.username}`);
          if(next) { // this is super hacky, next will be undefined in seed.js
              loginUser()
          }
        })
          .catch(err => {
            console.log('Create User Error: ',err);
            res.status(500).send('error creating user')
          })
        })
  })
}



signinUser = (res, req) =>{
  new LocalStrategy(options, (username, password, done) => {
   console.log("trying to authenticate");
   db.any("SELECT * FROM users WHERE username=$1", [username])
     .then(rows => {
       const user = rows[0];
       console.log("user: ", user);
       if (!user) {
         return done(null, false);
       }
       if (!bcrypt.compare(password, user.password_digest)) {
         return done(null, false);
       } else {
         return done(null, user);
       }
     })
     .catch(err => {
       console.log("error: ", err);
       return done(err);
     });
 })
}



module.exports = {
  signupuUser: signupuUser,
  signinUser: signinUser,
  getAllUsers: getAllUsers,
}

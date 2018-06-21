var db = require("./index");
var bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
var AWS = require('aws-sdk');
const config = require('../../config')

var s3 = new AWS.S3();
var myBucket = config.bucket;
var photoBucket = config.photoBucket;
var myKey = config.key;

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
  // console.log(req.files.file);
  console.log(req.files);


  let user = req.body.username;
  let imageFile = req.files.file;

  bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {

        s3.createBucket({Bucket: myBucket}, function(err, data) {

        if (err) {

           console.log("Err",err);
           res.status(status).send(message)

           } else {

             params = {
               Bucket: myBucket,
               Key: myKey + user ,
               Body: imageFile.data,
               ContentType: imageFile.mimetype,
               ACL: 'public-read'
             };

        var upload = new AWS.S3.ManagedUpload({params: params});
        upload.send(function(err, data) {


        const full_name = req.body.full_name
        const username = req.body.username
        const password = hash
        const email = req.body.email
        const profile_quote = req.body.profile_quote
        const profileURL = data.Location.toString();
        console.log("profileURL ",profileURL);


        db.any('INSERT INTO users (full_name, username, password_digest, email, profile_quote, profile_pic_url ) VALUES (($1), ($2), ($3), ($4), ($5), ($6))',
        [ full_name, username, password, email, profile_quote, profileURL])
        .then(() => {
          console.log(`created user: ${req.body.username}`);
          res.status(200).json({
            data
          })
        })
          .catch(err => {
            console.log('Create User Error: ',err.message, err.res);
            res.status(500).send('error creating user')
          })
            });
          }

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




getAllPhotos = (req, res, next) => {
  db
    .any("select * from photos")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Crystal has Retrieved ALL photos"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}


photoUpload = (req, res) => {
  console.log("signup", req.body);
  console.log(req.files);

  let user = req.body.username;
  let imageFile = req.files.file;


        s3.createBucket({Bucket: photoBucket}, function(err, data) {

        if (err) {

           console.log("Err",err);
           res.status(status).send(message)

           } else {

             params = {
               Bucket: photoBucket,
               Key: myKey +"/"+ user+"/" + imageFile.name,
               Body: imageFile.data,
               ContentType: imageFile.mimetype,
               ACL: 'public-read'
             };

        var upload = new AWS.S3.ManagedUpload({params: params});
        upload.send(function(err, data) {


        const user_id = req.body.user_id
        const caption = req.body.caption
        const hashtag = req.body.hashtag
        const photoURL = data.Location.toString();
        console.log("photoURL ",photoURL);


        db.any('INSERT INTO photos (user_id, caption, hashtag, photo_url ) VALUES (($1), ($2), ($3), ($4)) RETURNING *',
        [ user_id, caption, hashtag, photoURL])
        .then(() => {
          console.log(`created photo`);
          res.status(200).json({
            data
          })
        })
          .catch(err => {
            console.log('Create User Error: ',err.message, err.res);
            res.status(500).send('error creating user')
          })
            });
          }

        })

}

saveToBoard =(req, res) => {
  console.log(req.body);
  const user_id = req.body.user_id
  const photos_id = req.body.photos_id

  db.one("INSERT INTO bookmark (photos_id, user_id) VALUES (($1), ($2)) RETURNING *",
  [photos_id, user_id])
  .then(()=>{
    console.log(res.body);
    res.status(200).json({
      data: req.body
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err,'error adding photo to bookmark reference table')
  })
}

getPhotosById = (req, res, next) => {
    const id = req.params.user_id
    console.log(req.params);
  db
    .any("select * from photos where user_id=($1)",[id])
    .then(function(pics) {
      res.status(200).json({
        status: "success",
        pics: pics,
        message: "You has retrieved photos"
      });
    })
    .catch(function(err) {
      return next(err);
    });
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
// // }
// getAllUsers = (req, res, next) => {
//   db
//     .any("select * from users")
//     .then(function(data) {
//       res.status(200).json({
//         status: "success",
//         data: data,
//         message: "Crystal has Retrieved ALL users"
//       });
//     })
//     .catch(function(err) {
//       return next(err);
//     });
// }
//
// signup = (req, res) => {
//   console.log("signup", req.body);
//   console.log(req.files.file);
//   console.log(req.body.user_id);
//
//   let user = req.body.username;
//   let imageFile = req.files.file;
//
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//       bcrypt.hash(req.body.password, salt, function(err, hash) {
//         db.any('INSERT INTO users (full_name, username, password_digest, email) VALUES (${full_name}, ${username}, ${password}, ${email})', {
//           full_name: req.body.full_name,
//           username: req.body.username,
//           email:req.body.email,
//           password: hash,
//         })
//         .then(() => {
//           console.log(`created user: ${req.body.username}`);
//           res.send(`created user: ${req.body.username}`);
//
//         })
//           .catch(err => {
//             console.log('Create User Error: ',err.message, err.res);
//             res.status(500).send('error creating user')
//           })
//         })
//   })
// }



module.exports = {
signup,
getAllUsers,
updateProfile,
photoUpload,
getAllPhotos,
getPhotosById,
saveToBoard
}

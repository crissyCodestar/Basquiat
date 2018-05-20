var db = require("./index");


findUserById = (id) => {
return db.oneOrNone('SELECT * FROM users WHERE id=$1' [id])

}


verifyUser = (username) => {
  return db.oneOrNone('SELECT * FROM users WHERE username=$1', [username])

}


module.exports = {
  findUserById,
  verifyUser,
}
// function (username, password, cb) {
//   return verifyUser(username)
//     //If user exist the...
//     .then((validUser) => {
//       //hash and compare password to check if username that was found is the actuall user
//       bcrypt.compare(password, validUser.password)
//       .then((validPassword) => {
//         if(validPassword){
//           // return if the password for the found username is correct then return validUser
//           return done(null, validUser)
//         }
//           //If password is not correct return false, allow user to try again
//         return done(null, false)
//       })
//       .catch(err => done(err, false))
// })
// }

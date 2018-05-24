
const passport    = require('passport');
const passportJWT = require("passport-jwt");
var db = require("./db/index");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
const {findUserById, verifyUser} = require("./db/verify");
// const db = require("./db/queries");
const bcrypt = require('bcrypt');
const config = require('../config');

//Create LocalStrategy to check for user and create a token that will hold all users info
passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, cb) {

        //Passing in verification schema form database
        return verifyUser(username, password)
            .then(user => {
              //Check if user is in db
              if (!user) {
                  return cb(null, false, {message: 'Incorrect email or password.'});
              }
                //Check users input password with compare to db password
            if (!bcrypt.compare(password, user.password_digest)) {
                  return cb(null, false);
                } else {
                  return cb(null, user);
                }
            })
            .catch(err => {
                return cb(err);
            });
    }
));



/*
JWT Passport Strategy
  jwtFromRequest uses the ExtractJwt method from jwt-single package to tell the server
  where to look for the JWT, it will be placed in authentication
  This func will decode the encrypted jwt and pulls out the user id that was set
*/

passport.use(new JWTStrategy({
        // ExtractJwt are created to decode the token, payload is the unencrypted toaken data
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : config.secret
    },
    // jwt implements a new passport Strategy with payload argument
    function (jwtPayload, cb) {
        //find the user in db if needed
        return findOneById(jwtPayload.id)
            .then(user => {
                if(user){
                    return cb(null, user);
                }
              return cd(null, false)
            })
            .catch(err => {
                return cb(err);
            });
    }
));

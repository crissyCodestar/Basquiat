
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


passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, cb) {

        //Assume there is a DB module pproviding a global UserModel
        return verifyUser(username, password)
            .then(user => {
            
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }
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




passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : config.secret
    },
    function (jwtPayload, cb) {

        //find the user in db if needed
        return findOneById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));

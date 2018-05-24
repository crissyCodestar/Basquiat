
const express = require('express');
const router  = express.Router();

const jwt      = require('jsonwebtoken');
const passport = require('passport');
const config = require('../../config');




/* POST login. */
/*
authenticate comes from passport.use LocalStrategy
...it creates a new Strategy and sends back user info through token
...
*/
router.post('/login', function (req, res, next) {

    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(user);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            //User is logged in and token is sent to frontend
            const token = jwt.sign(user, config.secret );
            console.log(token);
            return res.json({user, token});
        });
    })
    (req, res);

});

module.exports = router;

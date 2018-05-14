var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const db = require("../db/queries");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', db.signupuUser );

router.post('/signin', db.signinUser);

router.get('/allUsers', db.getAllUsers);


module.exports = router;

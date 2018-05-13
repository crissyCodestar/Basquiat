var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', db.signupuUser );

router.post('/signin', db.signinUser);

module.exports = router;

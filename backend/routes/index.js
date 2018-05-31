var express = require('express');
const fileUpload = require('express-fileupload');

var router = express.Router();
const db = require("../db/queries");
const s3db = require('../db/profile_s3');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', db.signup );
// router.post('/signin', db.signinUser);

router.get('/allUsers', db.getAllUsers);

router.post('/upload', s3db.profileUpload);

module.exports = router;

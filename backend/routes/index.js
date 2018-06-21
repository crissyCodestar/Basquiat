var express = require('express');
const fileUpload = require('express-fileupload');

var router = express.Router();
const db = require("../db/queries");
const s3db = require('../db/profile_s3');


/* GET Requests on index */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/allUsers', db.getAllUsers);

router.get('/allPhotos', db.getAllPhotos);

router.get('/getUserPhotos/:user_id', db.getPhotosById)

//POST Requests on index
router.post('/signup', db.signup );

router.post('/upload', s3db.profileUpload);

router.post('/photoUpload', db.photoUpload);

router.post('/savePics', db.saveToBoard)

module.exports = router;

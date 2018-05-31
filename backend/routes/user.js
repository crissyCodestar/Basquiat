var express = require('express');
var router = express.Router();
const db = require("../db/queries");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get('/:username', function(req, res, next) {
    res.send(req.user);
});

router.put('/:user_id/updateProfile', db.updateProfile)

module.exports = router;

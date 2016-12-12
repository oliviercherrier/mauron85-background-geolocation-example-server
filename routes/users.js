var express = require('express');
var router = express.Router();

var User = require('../models/User.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

router.get('/:phone_uuid',  function(req, res) {
  User.findByUuid(req.params.phone_uuid, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
});

/* POST /user */
router.post('/', function(req, res, next) {
  User.create(
    {
      phone_uuid: req.body.User.phone_uuid, 
      first_name: req.body.User.first_name, 
      last_name: req.body.User.last_name,
      nickname: req.body.User.nickname,
      email: req.body.User.email
    }
    , function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;

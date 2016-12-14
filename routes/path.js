var express = require('express');
var router = express.Router();

var Path = require('../models/Path.js');
var User = require('../models/User.js')

/* GET users listing. */


// Prend en paramètre un identifiant de téléphone et retourne le path créé
// req.body
router.post('/', function(req, res, next) {
    // Create new Path and affect to user with Phone_uuid
    var newPath = Path.create({is_active: true}, function(err,createdPath){
        if(err) return next(err);
        User.findByUuid(req.body.Phone_uuid, function(err, users) {
            users[0].paths.push(createdPath);
            users[0].save(function(error,doc) {if (err) {console.log(err);}});
        });
    });
});

module.exports = router;
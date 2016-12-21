var express = require('express');
var router = express.Router();

var Path = require('../models/Path.js');
var User = require('../models/User.js');

// Prend en paramètre un identifiant de téléphone et retourne le path créé
// req.body

router.post( '/open/', function(req, res, next) {
    // Create new Path and affect to user with Phone_uuid
    var newPath = Path.create({is_active: true}, function(err,createdPath){
        if(err) return next(err);
        User.findByUuid(req.body.Phone_uuid, function(err, user) {
            user.paths.push(createdPath);
            user.save(function(error,user) {
                if (err) {return next(err);}
                res.json(user);
            });
        });
    });

    
});

router.post('/close/', function(req, res, next) {
    // Search active path and close it
     User.findByUuid(req.body.Phone_uuid, function(err, user) {})
        .populate({path: 'paths', match: {is_active: true}} )
        .exec(function(err, user){
            user.paths[0].is_active = false;
            user.paths[0].save(function(error,post) {
                if (err) {return next(err);}
                res.json(user.paths[0]);
            });
        });
    
});

module.exports = router;
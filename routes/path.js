var express = require('express');
var router = express.Router();

var Path = require('../models/Path.js');
var User = require('../models/User.js')

/* GET users listing. */


// Prend en paramètre un identifiant de téléphone et retourne le path créé
// req.body
router.post('/', function(req, res, next) {
    console.log("BODY:");
    console.log(req.body);
    // Test if user exist
    User.findByName(req.body.Phone_uuid, function(err, user) {
        console.log(user);
        console.log(user.length);
        // If not create it
        if(user.length == 0){
            console.log("Try to create user");
            // Try to save User
            User.create({phone_uuiid: req.body.Phone_uuid}, function(error, doc) {
                if (err) {console.log(err);}
            });
        }
    });
    
    /*var path = Path.create({is_active: true}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });*/
});

module.exports = router;
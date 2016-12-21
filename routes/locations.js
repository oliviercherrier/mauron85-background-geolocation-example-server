var express = require('express');
var router = express.Router();
var Location = require('../models/Location.js');
var Path = require('../models/Path.js');
var User = require('../models/User.js');

router.post('/', function(req, response){
    Location.create(req.body, function(err,createdLocations){
        if(err) return next(err);
        var user = User.findByUuid(req.headers.device_uuid, function(err, users) {})
        .populate({path: 'paths', match: {is_active: true}})
        .exec(function(err, user){
            if (user.paths.length > 0){
                var i = 0;
                for (i = 0; i < createdLocations.length; i++){
                    user.paths[0].locations.push(createdLocations[i]);
                }
                user.paths[0].save(function(error,doc) {if (err) {console.log(err);}});
                response.json(user);
            }
            else{
                response.sendStatus(409);
            }
        });
    });
});



module.exports = router;
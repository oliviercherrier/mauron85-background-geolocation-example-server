var express = require('express');
var router = express.Router();

router.post('/', function(request, response){
    console.log('Headers:\n', request.headers);
    console.log('Body:\n', request.body);
    console.log('------------------------------');
    response.sendStatus(200);
});

module.exports = router;
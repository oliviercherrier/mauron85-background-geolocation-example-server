var mongoose = require('mongoose');

var PathSchema = new mongoose.Schema({
    _id     : Number,
    is_active: boolean,
    locations : [{ type: Number, ref: 'Location' }]
});

module.exports = mongoose.model('Path', PathSchema);
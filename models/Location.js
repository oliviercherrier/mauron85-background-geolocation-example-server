var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
    _id     : Number,
    latitude: Number,
    longitude: Number
});

module.exports = mongoose.model('Location', LocationSchema);

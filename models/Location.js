var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
});

module.exports = mongoose.model('Location', LocationSchema);

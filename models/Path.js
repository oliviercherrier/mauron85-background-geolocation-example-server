var mongoose = require('mongoose');

var PathSchema = new mongoose.Schema({
    is_active: Boolean,
    locations : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }]
});

module.exports = mongoose.model('Path', PathSchema);

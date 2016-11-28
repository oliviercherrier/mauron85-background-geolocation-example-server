var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  _id     : Number,
  first_name: String,
  last_name: String,
  paths : [{ type: Number, ref: 'Path' }]
});

module.exports = mongoose.model('User', UserSchema);

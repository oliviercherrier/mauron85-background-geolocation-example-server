var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  _id     : Number,
  first_name: String,
  last_name: String,
  phone_id: String,
  paths : [{ type: Number, ref: 'Path' }]
});

UserSchema.statics.findByName = function(name, cb) {
  return this.find({ phone_id: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('User', UserSchema);
  
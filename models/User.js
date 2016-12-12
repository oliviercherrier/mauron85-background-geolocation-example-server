var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone_uuid: String,
  nickname: String,
  email: String,
  paths : [{ type: Number, ref: 'Path' }]
});

UserSchema.statics.findByUuid = function(name, cb) {
  return this.find({ phone_uuid: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('User', UserSchema);
  
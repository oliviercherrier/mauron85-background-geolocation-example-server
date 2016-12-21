var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone_uuid: String,
  nickname: String,
  email: String,
  paths : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Path' }]
});

UserSchema.statics.findByUuid = function(name, cb) {
  return this.findOne({ phone_uuid: new RegExp(name, 'i') }, cb);
};

module.exports = mongoose.model('User', UserSchema);
  
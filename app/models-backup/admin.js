var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  name: {type: String, default: '', trim: true},
  username: {type: String, default: '', trim: true},
  hashed_password: {type: String, default: '', trim: true},
  email: {type: String, default: '', trim: true},
  role: {type: String, default: '', trim: true},
  createdAt: {type: Date, default: Date.now}
});

AdminSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() { return this._password });

AdminSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  makeSalt: function () {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  },

  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  }
};

mongoose.model('Admin', AdminSchema);
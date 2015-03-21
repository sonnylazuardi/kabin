var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type : String, default : '', trim : true},
  house: {type : Schema.ObjectId, ref : 'House'},
  role: {type: String, default: 'user'},
  email: {type: String, default: ''},
  username: {type: String, default: ''},
  hashed_password: {type: String, default: ''},
  salt: {type: String, default: ''},
  createdAt  : {type : Date, default : Date.now}
});

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() { return this._password });

UserSchema.methods = {
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

UserSchema.path('name').required(true, 'Nama tidak boleh kosong');
UserSchema.path('email').required(true, 'Email cannot be blank');

UserSchema.path('email').validate(function (email, fn) {
  var User = mongoose.model('User');
  
  if (this.isNew || this.isModified('email')) {
    User.find({ email: email }).exec(function (err, users) {
      fn(!err && users.length === 0);
    });
  } else fn(true);
}, 'Email already exists');


mongoose.model('User', UserSchema);
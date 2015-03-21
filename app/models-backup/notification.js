var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
  admin: {type: Schema.ObjectId, ref: 'Admin'},
  user: {type: Schema.ObjectId, ref: 'User'},
  message: {type: String, default: '', trim: true},
  title: {type: String, default: '', trim: true},
  type: {type: String, default: '', trim: true},//kdeluar / org
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Notification', NotificationSchema);
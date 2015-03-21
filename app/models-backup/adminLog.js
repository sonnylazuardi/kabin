var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminLogSchema = new Schema({
  admin: {type: Schema.ObjectId, ref: 'Admin'},
  user: {type: Schema.ObjectId, ref: 'User'}, //nullable
  action: {type: String, default: '', trim: true},
  message: {type: String, default: '', trim: true},
  createdAt: {type: Date, default: Date.now}
});

//tambahin complain log
//

mongoose.model('AdminLog', AdminLogSchema);
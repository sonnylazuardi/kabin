var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComplainSchema = new Schema({
  admin: {type: Schema.ObjectId, ref: 'Admin'}, //solveby
  user: {type: Schema.ObjectId, ref: 'User'},
  message: {type: String, default: '', trim: true},
  title: {type: String, default: '', trim: true},
  status: {type: Number, default: 0},
  forward: {type: Boolean, default: false},
  note: {type: String, default: '', trim: true},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Complain', ComplainSchema);
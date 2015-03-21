var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsageSchema = new Schema({
  device: {type: Schema.ObjectId, ref: 'Device'},
  house: {type: Schema.ObjectId, ref: 'House'},
  value: {type: Number, default: 0},
  // description: {type: String, default: '', trim: true},
  // timestamp: {type: Date, default: Date.now},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Usage', UsageSchema);
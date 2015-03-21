var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User'}, 
  house: {type: Schema.ObjectId, ref: 'House'}, 
  action: {type: String, default: ''},
  value: {type: Number, default: 0 },
  status: {type: Number, default: 0},
  device: {type: Schema.ObjectId, ref: 'Device'},
  timestamp: {type: Date, default: Date.now},
  createdAt: {type: Date, default: Date.now}
});

//scedule action one many

mongoose.model('Schedule', ScheduleSchema);
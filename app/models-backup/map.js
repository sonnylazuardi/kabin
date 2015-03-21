var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MapSchema = new Schema({
  house: {type: Schema.ObjectId, ref: 'House'},
  level: {type: Number, default: 0},
  picture: {type: String, default: '', trim: true},
  category: {type: String, default: '', trim: true},
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Map', MapSchema);
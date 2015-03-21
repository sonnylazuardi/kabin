var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new Schema({
  name: {type: String, default: '', trim: true},
  controller: {type: String, default: '', trim: true},
  state: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now}
});

HouseSchema.path('name').required(true, 'Nama tidak boleh kosong');
HouseSchema.path('controller').required(true, 'Controller tidak boleh kosong');

mongoose.model('House', HouseSchema);
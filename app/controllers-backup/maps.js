var mongoose = require('mongoose');
var Map = mongoose.model('Map');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  Map.findOne({_id: id}, function (err, map) {
    if (err) return next(err);
    if (!map) return next(new Error('not found'));
    req.map = map;
    next();
  });
};

exports.index = function (req, res){
  Map.find(function (err, maps) {
    res.json(maps);
  });
};

exports.create = function (req, res) {
  var map = new Map(req.body);
  map.validate(function(err) {
    if (err) res.json(err);
    map.save(function (err, map) {
      res.json(map);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.map);
};

exports.update = function (req, res) {
  var map = req.map;

  map = extend(map, req.body);
  map.validate(function(err) {
    if (err) res.json(err);
    map.save(function (err, map) {
      res.json(map);
    });
  });
};

exports.destroy = function (req, res) {
  var map = req.map;

  map.remove(function (err, map) {
    res.json(map);
  });
};
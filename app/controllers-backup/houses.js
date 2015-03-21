var mongoose = require('mongoose');
var House = mongoose.model('House');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  House.findOne({_id: id}, function (err, house) {
    if (err) return next(err);
    console.log(house);
    // if (!house) return next(new Error('not found'));
    req.house = house;
    next();
  });
};

exports.index = function (req, res){
  House.find(function (err, houses) {
    res.json(houses);
  });
};

exports.create = function (req, res) {
  var house = new House(req.body);
  house.validate(function(err) {
    if (err) res.json(err);
    house.save(function (err, house) {
      res.json(house);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.house);
};

exports.update = function (req, res) {
  var house = req.house;

  house = extend(house, req.body);
  house.validate(function(err) {
    if (err) res.json(err);
    house.save(function (err, house) {
      res.json(house);
    });
  });
};

exports.destroy = function (req, res) {
  var house = req.house;

  house.remove(function (err, house) {
    res.json(house);
  });
};
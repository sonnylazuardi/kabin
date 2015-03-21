var mongoose = require('mongoose');
var Complain = mongoose.model('Complain');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  Complain.findOne({_id: id}, function (err, complain) {
    if (err) return next(err);
    if (!complain) return next(new Error('not found'));
    req.complain = complain;
    next();
  });
};

exports.index = function (req, res){
  Complain.find(function (err, complains) {
    res.json(complains);
  });
};

exports.create = function (req, res) {
  var complain = new Complain(req.body);
  complain.validate(function(err) {
    if (err) res.json(err);
    complain.save(function (err, complain) {
      res.json(complain);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.complain);
};

exports.update = function (req, res) {
  var complain = req.complain;

  complain = extend(complain, req.body);
  complain.validate(function(err) {
    if (err) res.json(err);
    complain.save(function (err, complain) {
      res.json(complain);
    });
  });
};

exports.destroy = function (req, res) {
  var complain = req.complain;

  complain.remove(function (err, complain) {
    res.json(complain);
  });
};
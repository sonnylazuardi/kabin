var mongoose = require('mongoose');
var Usage = mongoose.model('Usage');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  Usage.findOne({_id: id}, function (err, usage) {
    if (err) return next(err);
    if (!usage) return next(new Error('not found'));
    req.usage = usage;
    next();
  });
};

exports.index = function (req, res){
  Usage.find(function (err, usages) {
    res.json(usages);
  });
};

exports.create = function (req, res) {
  var usage = new Usage(req.body);
  usage.validate(function(err) {
    if (err) res.json(err);
    usage.save(function (err, usage) {
      res.json(usage);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.usage);
};

exports.update = function (req, res) {
  var usage = req.usage;

  usage = extend(usage, req.body);
  usage.validate(function(err) {
    if (err) res.json(err);
    usage.save(function (err, usage) {
      res.json(usage);
    });
  });
};

exports.destroy = function (req, res) {
  var usage = req.usage;

  usage.remove(function (err, usage) {
    res.json(usage);
  });
};
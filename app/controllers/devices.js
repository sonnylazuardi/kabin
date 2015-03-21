var Device = require('../models/device');
var extend = require('util')._extend;
var _ = require('underscore');

exports.load = function (req, res, next, id){
  Device.get(id, function (err, device) {
    if (err) return next(err);
    if (!device) return next(new Error('not found'));
    req.device = device;
    next();
  })
};

exports.index = function (req, res){
  Device.allDocs({include_docs: true}, function (err, devices) {
    res.json(_.map(devices.rows, function (item) {
      return item.doc;
    }));
  });
};

exports.create = function (req, res) {
  var device = req.body;
  Device.post(device, function (err, device) {
    if (err) res.json(err);
    res.json(device);
  });
};

exports.show = function (req, res) {
  res.json(req.device);
};

exports.update = function (req, res) {
  var device = req.device;

  device = extend(device, req.body);
  Device.put(device, device._id, function (err, device) {
    if (err) res.json(err);
    res.json(device);
  });

};

exports.destroy = function (req, res) {
  var device = req.device;

  Device.remove(device, null, function (err, device) {
    if (err) res.json(err);
    res.json(device);
  });
};
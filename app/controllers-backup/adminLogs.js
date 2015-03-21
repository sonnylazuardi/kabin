var mongoose = require('mongoose');
var AdminLog = mongoose.model('AdminLog');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  AdminLog.findOne({_id: id}, function (err, adminLog) {
    if (err) return next(err);
    if (!adminLog) return next(new Error('not found'));
    req.adminLog = adminLog;
    next();
  });
};

exports.index = function (req, res){
  AdminLog.find(function (err, adminLogs) {
    res.json(adminLogs);
  });
};

exports.create = function (req, res) {
  var adminLog = new AdminLog(req.body);
  adminLog.validate(function(err) {
    if (err) res.json(err);
    adminLog.save(function (err, adminLog) {
      res.json(adminLog);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.adminLog);
};

exports.update = function (req, res) {
  var adminLog = req.adminLog;

  adminLog = extend(adminLog, req.body);
  adminLog.validate(function(err) {
    if (err) res.json(err);
    adminLog.save(function (err, adminLog) {
      res.json(adminLog);
    });
  });
};

exports.destroy = function (req, res) {
  var adminLog = req.adminLog;

  adminLog.remove(function (err, adminLog) {
    res.json(adminLog);
  });
};
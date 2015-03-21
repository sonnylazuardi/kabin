var mongoose = require('mongoose');
var Notification = mongoose.model('Notification');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  Notification.findOne({_id: id}, function (err, Notification) {
    if (err) return next(err);
    if (!Notification) return next(new Error('not found'));
    req.Notification = Notification;
    next();
  });
};

exports.index = function (req, res){
  Notification.find(function (err, Notifications) {
    res.json(Notifications);
  });
};

exports.create = function (req, res) {
  var Notification = new Notification(req.body);
  Notification.validate(function(err) {
    if (err) res.json(err);
    Notification.save(function (err, Notification) {
      res.json(Notification);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.Notification);
};

exports.update = function (req, res) {
  var Notification = req.Notification;

  Notification = extend(Notification, req.body);
  Notification.validate(function(err) {
    if (err) res.json(err);
    Notification.save(function (err, Notification) {
      res.json(Notification);
    });
  });
};

exports.destroy = function (req, res) {
  var Notification = req.Notification;

  Notification.remove(function (err, Notification) {
    res.json(Notification);
  });
};
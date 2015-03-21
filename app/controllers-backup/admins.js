var mongoose = require('mongoose');
var Admin = mongoose.model('Admin');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  Admin.findOne({_id: id}, function (err, admin) {
    if (err) return next(err);
    if (!admin) return next(new Error('not found'));
    req.admin = admin;
    next();
  });
};

exports.index = function (req, res){
  Admin.find(function (err, admins) {
    res.json(admins);
  });
};

exports.create = function (req, res) {
  var admin = new Admin(req.body);
  admin.validate(function(err) {
    if (err) res.json(err);
    admin.save(function (err, admin) {
      res.json(admin);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.admin);
};

exports.update = function (req, res) {
  var admin = req.admin;

  admin = extend(admin, req.body);
  admin.validate(function(err) {
    if (err) res.json(err);
    admin.save(function (err, admin) {
      res.json(admin);
    });
  });
};

exports.destroy = function (req, res) {
  var admin = req.admin;

  admin.remove(function (err, admin) {
    res.json(admin);
  });
};
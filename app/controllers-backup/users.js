var mongoose = require('mongoose');
var User = mongoose.model('User');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  User.findOne({_id: id}, function (err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('not found'));
    req.user = user;
    next();
  });
};

exports.index = function (req, res){
  User.find(function (err, users) {
    res.json(users);
  });
};

exports.create = function (req, res) {
  var user = new User(req.body);
  user.validate(function(err) {
    if (err) res.json(err);
    user.save(function (err, user) {
      res.json(user);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.user);
};

exports.update = function (req, res) {
  var user = req.user;

  user = extend(user, req.body);
  user.validate(function(err) {
    if (err) res.json(err);
    user.save(function (err, user) {
      res.json(user);
    });
  });
};

exports.destroy = function (req, res) {
  var user = req.user;

  user.remove(function (err, user) {
    res.json(user);
  });
};

exports.login = function (req, res) {
  var user = new User(req.body);
  
};
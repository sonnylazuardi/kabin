var mongoose = require('mongoose');
var Schedule = mongoose.model('Schedule');
var extend = require('util')._extend;

exports.load = function (req, res, next, id){
  Schedule.findOne({_id: id}, function (err, schedule) {
    if (err) return next(err);
    if (!schedule) return next(new Error('not found'));
    req.schedule = schedule;
    next();
  });
};

exports.index = function (req, res){
  Schedule.find(function (err, schedules) {
    res.json(schedules);
  });
};

exports.create = function (req, res) {
  var schedule = new Schedule(req.body);
  schedule.validate(function(err) {
    if (err) res.json(err);
    schedule.save(function (err, schedule) {
      res.json(schedule);
    });
  });
};

exports.show = function (req, res) {
  res.json(req.schedule);
};

exports.update = function (req, res) {
  var schedule = req.schedule;

  schedule = extend(schedule, req.body);
  schedule.validate(function(err) {
    if (err) res.json(err);
    schedule.save(function (err, schedule) {
      res.json(schedule);
    });
  });
};

exports.destroy = function (req, res) {
  var schedule = req.schedule;

  schedule.remove(function (err, schedule) {
    res.json(schedule);
  });
};
// var houses = require('./controllers/houses');
// var users = require('./controllers/users');
// var maps = require('./controllers/maps');
// var schedules = require('./controllers/schedules');
var devices = require('./controllers/devices');
// var admins = require('./controllers/admins');
// var usages = require('./controllers/usages');
// var adminLogs = require('./controllers/adminLogs');
// var complains = require('./controllers/complains');
// var notifications = require('./controllers/notifications');
// var passport       = require('passport');

module.exports = function(app) {

    // app.param('idHouse', houses.load);
    // app.get('/houses', houses.index);
    // app.post('/houses', houses.create);
    // app.get('/houses/:idHouse', houses.show);
    // app.put('/houses/:idHouse', houses.update);
    // app.delete('/houses/:idHouse', houses.destroy);

    // app.param('idUser', users.load);
    // app.get('/users', users.index);
    // app.post('/users', users.create);
    // app.get('/users/:idUser', users.show);
    // app.put('/users/:idUser', users.update);
    // app.delete('/users/:idUser', users.destroy);

    // app.param('idMap', maps.load);
    // app.get('/maps', maps.index);
    // app.post('/maps', maps.create);
    // app.get('/maps/:idMap', maps.show);
    // app.put('/maps/:idMap', maps.update);
    // app.delete('/maps/:idMap', maps.destroy);

    // app.param('idSchedule', schedules.load);
    // app.get('/schedules', schedules.index);
    // app.post('/schedules', schedules.create);
    // app.get('/schedules/:idSchedule', schedules.show);
    // app.put('/schedules/:idSchedule', schedules.update);
    // app.delete('/schedules/:idSchedule', schedules.destroy);

    app.param('idDevice', devices.load);
    app.get('/devices', devices.index);
    app.post('/devices', devices.create);
    app.get('/devices/:idDevice', devices.show);
    app.put('/devices/:idDevice', devices.update);
    app.delete('/devices/:idDevice', devices.destroy);

    // app.param('idAdmin', admins.load);
    // app.get('/admins', admins.index);
    // app.post('/admins', admins.create);
    // app.get('/admins/:idAdmin', admins.show);
    // app.put('/admins/:idAdmin', admins.update);
    // app.delete('/admins/:idAdmin', admins.destroy);

    // app.param('idUsage', usages.load);
    // app.get('/usages', usages.index);
    // app.post('/usages', usages.create);
    // app.get('/usages/:idUsage', usages.show);
    // app.put('/usages/:idUsage', usages.update);
    // app.delete('/usages/:idUsage', usages.destroy);

    // app.param('idAdminLog', adminLogs.load);
    // app.get('/adminLogs', adminLogs.index);
    // app.post('/adminLogs', adminLogs.create);
    // app.get('/adminLogs/:idAdminLog', adminLogs.show);
    // app.put('/adminLogs/:idAdminLog', adminLogs.update);
    // app.delete('/adminLogs/:idAdminLog', adminLogs.destroy);

    // app.param('idComplain', complains.load);
    // app.get('/complains', complains.index);
    // app.post('/complains', complains.create);
    // app.get('/complains/:idComplain', complains.show);
    // app.put('/complains/:idComplain', complains.update);
    // app.delete('/complains/:idComplain', complains.destroy);

    // app.param('idNotification', notifications.load);
    // app.get('/notifications', notifications.index);
    // app.post('/notifications', notifications.create);
    // app.get('/notifications/:idNotification', notifications.show);
    // app.put('/notifications/:idNotification', notifications.update);
    // app.delete('/notifications/:idNotification', notifications.destroy);

    // /* AUTH ROUTING */
    // app.post('/login', passport.authenticate('local', { 
    //     successRedirect: '/logged',
    //     failureRedirect: '/guest',
    //     failureFlash: false }));

    // app.post('/logout', users.logout);

    // app.get('/logged', function (req, res) {
    //     res.send('logged');
    // });

    // app.get('/guest', function (req, res) {
    //     res.send('guest');
    // });
    
};
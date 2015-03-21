var devices = require('./controllers/devices');

module.exports = function(app) {

    app.param('idDevice', devices.load);
    app.get('/devices', devices.index);
    app.post('/devices', devices.create);
    app.get('/devices/:idDevice', devices.show);
    app.put('/devices/:idDevice', devices.update);
    app.delete('/devices/:idDevice', devices.destroy);
    
};
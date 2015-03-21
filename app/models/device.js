var PouchDB        = require('pouchdb');
var devices        = new PouchDB('http://localhost:5984/kabin_devices');
var socket         = require('../../socket')(null);

devices.changes({
    since: 'now',
    live: true
}).on('change', function(change) {
    var device = devices.get(change.id, function (err, device) {
        socket.io.sockets.emit('command', {devices: [device]});
    });
});

socket.io.on('connection', function (sck) {
    sck.on('streaming', function (data) {
        console.log(data);
    });

    sck.on('streaming_request', function (data) {
        socket.io.sockets.emit('streaming_request', data);
    });
});

module.exports = devices;
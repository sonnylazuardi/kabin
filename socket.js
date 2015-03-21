var sio;

module.exports = function(http) {
    var module = {};
    if (http != null) {
        sio = require('socket.io')(http);
        sio.on('connection', function(socket){
            console.log('a user connected');
        });
    }
    module.io = sio;
    return module;
};
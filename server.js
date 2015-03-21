var express        = require('express');
var app            = express();
var http           = require('http').Server(app);
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs             = require('fs');
var socket         = require('./socket')(http);
var cluster        = require('cluster');
var PouchDB        = require('pouchdb');
var HTTPPouchDB    = require('http-pouchdb')(PouchDB, 'http://localhost:5984');

var port = process.env.PORT || 3000;

fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.use('/db', require('express-pouchdb')(HTTPPouchDB));

http.listen(port, function() {
  console.log('Magic happens on port ' + port);    
});
exports = module.exports = app;
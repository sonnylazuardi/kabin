var express        = require('express');
var app            = express();
var http           = require('http').Server(app);
// var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs             = require('fs');
var socket         = require('./socket')(http);
var cluster        = require('cluster');
var PouchDB        = require('pouchdb');

// var passport       = require('passport');
// var LocalStrategy  = require('passport-local').Strategy;
var db = require('./config/db');

var port = process.env.PORT || 3000;
// mongoose.connect(db.url);

fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

// var User = mongoose.model('User');

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.authenticate(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

require('./app/routes')(app);

app.use('/db', require('express-pouchdb')(PouchDB));

var devices = new PouchDB('http://localhost:5984/kabin_devices');

devices.changes({
    since: 'now',
    live: true
}).on('change', function(change) {
    console.log(change);
});

http.listen(port, function() {
  console.log('Magic happens on port ' + port);    
});
exports = module.exports = app;
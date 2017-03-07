var express = require('express');
var path = require('path');
// var router = express.Router();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser'); // do we need this for our database?

var app = express();

// connect to the mongo database
// mongoose.connect('mongodb://localhost/T2S');
var user = process.env.user;
var pass = process.env.pass;

console.log('user: ', user);
console.log('pass: ', pass);

mongoose.connect(`mongodb://${user}:${pass}@ds123050.mlab.com:23050/t2s`);

// add middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './../public')));

// listen on port
var port = process.env.PORT || 8050;
app.listen(port);
console.log('Listening on port: ' + port);

// Hook up routes
require('./routes')(app, express);

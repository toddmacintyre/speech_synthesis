var express = require('express');
var path = require('path');
// var router = express.Router();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser'); // do we need this for our database?

var app = express();

// connect to the mongo database
mongoose.connect('mongodb://localhost/T2S')

// add middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// listen on port
var port = process.env.PORT || 8050;
app.listen(port);
console.log('Listening on port: ' + port);


// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});
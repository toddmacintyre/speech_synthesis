var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); // do we need this for our database?

var app = express();

// connect to the mongo database
mongoose.connect('mongodb://localhost/T2S')

// add middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(8000);
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var entriesSchema = new Schema({
  title: String,
  body: String,
  date: {
    type, Date,
    default: Date.now
  }
});


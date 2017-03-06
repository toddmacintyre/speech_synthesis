var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  title: String,
  body: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Entry', EntrySchema);



// var Entry = require('entryModel.js');

// Entry.save

// var Animal = mongoose.model('Animal', AnimalSchema);
// var dog = new Animal({ name: 'Rover', type: 'dog' });
// dog.save(function(err) {
//   // we've saved the dog into the db here
//   if (err) throw err;

//   dog.name = "Spike";
//   dog.save(function(err) {
//     // we've updated the dog into the db here
//     if (err) throw err;
//   });
// });





// // return this.model('Animal').find({ type: this.type }, cb);

// ToySchema.add({ name: 'string', color: 'string', price: 'number' });
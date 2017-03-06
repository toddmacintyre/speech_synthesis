// Routes

// Requires
var path = require('path');
var Entry = require('../db/models/entryModel.js');

module.exports = function(app, express) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

  app.get('/API/entries', function(req, res) {
    var entries;
    Entry.find(function (err, entries) {
      if (err) return console.error(err);

      console.log('----------', entries);
      res.send(entries);
    });
  });

  app.post('/API/entries', function(req, res) {
    // trigger add
    var title = req.body.title;
    var body = req.body.body;
    var entry = new Entry({ title: title, body: body});
    console.log('+++++++++', req.body);
    res.send(entry);
    // entry.save(function(err) {
    //   if (err) {
    //     console.log('error creating new entry...');
    //     throw err;
    //   }
    // });
  });

};

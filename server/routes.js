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

  app.get('/API/entries/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);

    Entry.
      findOne({
        _id: id
      })
      .then(function(doc) {
        res.send(doc);
      })
      .catch(function(err) {
        return console.error(err);
      });
  });

  app.post('/API/entries', function(req, res) {
    // trigger add
    var title = req.body.title;
    var body = req.body.body;
    var entry = new Entry({ title: title, body: body});
    console.log('+++++++++', req.body);
    entry.save(function(err) {
      if (err) {
        console.log('error creating new entry...');
        throw err;
      }
    });
    res.send(entry);
  });

  app.delete('/API/entries/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);

    Entry.
      findOneAndRemove({
        _id: id
      }, function(err) {
        console.log('error deleting entry...');
        throw err;
      });
  });
  
};

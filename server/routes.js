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
      if (err) {
        console.error(err);
        res.sendStatus(400);
      }

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
        if (doc) {
          res.send(doc);
        } else {
          res.sendStatus(400);
        }
      })
      .catch(function(err) {
        console.error(err);
        res.sendStatus(400);
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
        res.sendStatus(400);
        // throw err;
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
        if (err) {
          console.log('error deleting entry...');
          // throw err;
          res.sendStatus(400);
        }
        res.sendStatus(200);
      });
  });
  
};

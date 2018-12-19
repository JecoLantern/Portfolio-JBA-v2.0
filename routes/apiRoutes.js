var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/contactdb", function(req, res) {
    db.ContactDB.findAll({}).then(function(dbContacted) {
      res.json(dbContacted);
    });
  });

  // Create a new example
  app.post("/api/contactdb", function(req, res) {
    db.ContactDB.create(req.body).then(function(dbContacted) {
      res.json(dbContacted);
    });
  });

  // Delete an example by id
  app.delete("/api/contactdb/:id", function(req, res) {
    db.ContactDB.destroy({ where: { id: req.params.id } }).then(function(dbContacted) {
      res.json(dbContacted);
    });
  });
};

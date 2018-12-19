var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
    res.render("index")
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render About Me Page
  app.get("/about", function(req, res) {
    res.render("about");
  });
  // Render Portfolio Page
  app.get("/portfolio", function(req, res) {
    res.render("portfolio");
  });
  // Render Contact Me Page
  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

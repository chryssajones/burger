console.log("The controller is connected!");

// import dependencies and models
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// create routes
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// export module
module.exports = router;
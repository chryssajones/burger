// import dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require ('body-parser');

// set up express
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// start listening!
var port = process.env.PORT || 8080;
  app.listen(port);
  console.log("Listening on port " + port);

console.log(module.exports);
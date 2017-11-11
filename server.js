// import dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require ('body-parser');

// set up express
var app = express();
var PORT = process.env.PORT || 8080;

// serve static content and set up body-parser
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// start listening!
app.listen(PORT, function() {
	console.log("app is listening on port " + PORT);
});
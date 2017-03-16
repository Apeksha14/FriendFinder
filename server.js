// Dependencies
// Series of npm packages that we will use to give our server useful functionality
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// This sets up the basic properties for our express server 

// =============================================================
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// The below points our server to a series of "route" files.

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

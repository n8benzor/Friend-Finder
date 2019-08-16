// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const nodemon = require("nodemon");
// Sets up the Express App
// =============================================================
const app = express();
const port = process.env.port || 8080;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Directs the server to the route files
// =============================================================
require("../Friend-Finder/app/routing/apiRoutes")(app);
require("../Friend-Finder/app/routing/htmlRoutes")(app);


// Listener start the server on the port (8080)
// =============================================================
app.listen(port, function() {
    console.log("App listening on PORT: " + port);
  });


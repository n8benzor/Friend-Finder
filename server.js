// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Directs the server to the route files
// =============================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Listener start the server on the port (8080)
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


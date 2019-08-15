// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Directs the server to the route files
// =============================================================
require("../Friend-Finder/app/routing/apiRoutes")(app);
require("../Friend-Finder/app/routing/htmlRoutes")(app);


// Listener start the server on the port (8080)
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


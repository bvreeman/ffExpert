const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  // Add routes, both API and view
app.use(routes)

app.post('/', (req, res) => {
  res.send();
})

// If no API routes are hit, send the React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
  });

  // Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
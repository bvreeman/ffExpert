const router = require("express").Router();
const playerRoutes = require("./players");
const path = require("path");

router.use("/players", playerRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });  

module.exports = router;
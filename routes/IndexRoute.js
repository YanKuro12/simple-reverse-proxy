// importing necessary modules
const router = require("express").Router();

// setting the route
router.get("/", (req, res) => {
    res.send("Osm gtps by YanKuro");
});

// exporting the router
module.exports = router;

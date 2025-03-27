// importing necessary modules
const router = require("express").Router();

// setting the route
router.get("/", (req, res) => {
    res.send("This Webiste For Handel Your Cache, pls support rton team");
});

// exporting the router
module.exports = router;

var express = require("express");
var router = express.Router();
var moment = require("moment");

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/:time", function(req, res) {
  function unixToNatural(unix) {
    var natural = moment.unix(unix).format("MMMM DD, YYYY");
    return { unix: unix, time: natural };
  }
  function naturalToUnix(natural) {
    var unix = moment(natural, "MMMM DD, YYYY").format("X");
    return { unix: unix, time: natural };
  }
  if (!isNaN(req.params.time)) {
    var result = unixToNatural(req.params.time);
  } else {
    var result = naturalToUnix(req.params.time);
  }
  res.json(result);
});

module.exports = router;

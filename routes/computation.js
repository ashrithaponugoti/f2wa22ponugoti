var express = require('express');
var router = express.Router();
let x=Math.random();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Math.atanh() applied to "+x+" is "+Math.atanh(x));
});

module.exports = router;

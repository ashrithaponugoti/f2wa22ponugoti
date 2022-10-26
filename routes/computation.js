var express = require('express');
var router = express.Router();
let x=Math.random();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Math.abs() applied to ${x} is ${Math.abs(x)} <br>
  Math.acos() applied to ${x} is ${Math.acos(x)} <br>
  Math.sin() applied to ${x} is ${Math.sin(x)} <br>
  Math.sinh() applied to ${x} is ${Math.sinh(x)}`);
});

module.exports = router;

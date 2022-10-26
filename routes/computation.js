var express = require('express');
var router = express.Router();
let x=Math.random();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`Math.pow() applied to ${x} is ${Math.pow(x)} <br>
  Math.sign() applied to ${x} is ${Math.sign(x)} <br>
  Math.tanh() applied to ${x} is ${Math.tanh(x)} <br>
  Math.trunc() applied to ${x} is ${Math.trunc(x)}`);
});

module.exports = router;

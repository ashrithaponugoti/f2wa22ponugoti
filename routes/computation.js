var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(req.query)
  if (Object.keys(req.query).length === 0) {

    console.log("Entered")

    let r = Math.random()

    res.render(`computation`, { value1: `Math.pow() applied to  ${r},${r} is ${Math.pow(r,r)}`,
     value2: `Math.sign() applied to  ${r} is ${Math.sign(r)}`,
    value3: `Math.tanh() applied to  ${r} is ${Math.tanh(r)}`, 
    value4: `Math.trunc() applied to  ${r} is ${Math.trunc(r)}`});

} else

    for (let i in req.query) {

        console.log(i)

        res.render(`computation`, { value1: `Math.pow() applied to  ${req.query[i]},${req.query[i]} is ${Math.pow(req.query[i],req.query[i])}`,
     value2: `Math.sign() applied to  ${req.query[i]} is ${Math.sign(req.query[i])}`,
    value3: `Math.tanh() applied to  ${req.query[i]} is ${Math.tanh(req.query[i])}`, 
    value4: `Math.trunc() applied to  ${req.query[i]} is ${Math.trunc(req.query[i])}`});

    }

});


module.exports = router;

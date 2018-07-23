var path = require('path');
var express = require('express');
var router = express.Router();
var date = require('./date');


router.get('/' , function (req , res){
	res.sendFile(path.join(__dirname +'/index.html'));
})

router.get('/api/timestamp/:time' , function(req , res){
	var time = req.params.time;
	console.log(date.returnDate(time), time)
	res.json(date.returnDate(time));

});
module.exports = router;
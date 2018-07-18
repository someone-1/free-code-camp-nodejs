var express = require('express');
var app = express();
var query = require('./query');

app.get('/new/*' , function(req , res){
	var id = req.params['0'];
	query.addUrl(id , res);
	console.log(id);
})

app.get('/*' , function(req , res){
	var id = req.params['0'];
	query.look(id , res);
})

var port = process.env.PORT || 8080;
app.listen(port);

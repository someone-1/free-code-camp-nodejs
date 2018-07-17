var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var multer = require('multer');
var upload = multer({dest : 'upload/'})

app.get('/' , function(req , res){
	res.sendFile(path.join(__dirname , 'index.html'));
})

app.post('/upload' , upload.single('upload') , function(req , res){

	fs.unlink(req.file.path , function(err){
		if(err){
			return console.log(err)
		} else{
			console.log(req.file.filename + ' is deleted');
		}
	})

	res.json({size : req.file.size});
	//console.log(req.file);
})

var port = process.env.PORT || 8080;

app.listen(port , function(){
	console.log('app started at ' + port);
})
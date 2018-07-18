var express = require('express');
var port = process.env.PORT || 8080;
function start(){
	var app = express();
	app.get('/whoami' , function(req , res){
		var ip = req.headers['x-forwarded-for'] || 
		req.connection.remoteAddress || 
		req.socket.remoteAddress || 
		req.connection.socket.remoteAddress;
		var language = req.headers['accept-language'].split(',')[0];
		var software = req.headers['user-agent'].split(') ')[0].split(' (')[1];

		var send = {
			"ipaddress" : ip,
			"language" : language,
			"software" : software
		};
		res.send(send);
	})
	app.listen(port);
	console.log('app started in port ' + port)
}
start();
var app = require('express')();
var port = process.env.PORT || 8080;

function start(){
	var router = require('./router');
	app.use('/' , router);
	app.listen(port);
}
exports.start = start;
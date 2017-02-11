var app = require('express')();
function start(){
	var router = require('./router');
	app.use('/' , router);
	app.listen(8080);
}
exports.start = start;
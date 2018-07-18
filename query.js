var mongo = require('./mongo');

function addUrl(link , res){
	console.log('adding ' + link +' to the data base');
	var small = new Date().getTime();
	mongo.insert(link , small);
	console.log('inserted the data');

	//the url and the shortened url
	res.send({"link": link , "small" : small});
}


function look(small , res){
	console.log('looking if url exists');
	var redirect = mongo.find(small , res);
	console.log(redirect + ' redirect');
}

module.exports.addUrl = addUrl;
module.exports.look = look;
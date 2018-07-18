var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://some1:password@ds153239.mlab.com:53239/short_url';

function insert (data , small){
	mongoClient.connect(url , function(err , db){
		var collection = db.collection('link');
		if(err){
			return console.log(err);
		} else{
			console.log('connection established to the ' + url);
			collection.insert({'link' : data , 'small' : small});
			db.close();
		}
	})
}

function find (small , res){
	small = parseInt(small)
	mongoClient.connect(url , function(err , db){
		var collection = db.collection('link')
		if(err){
			return console.log(err);
		} else if(!isNaN(small)){
			console.log('connection established to the ' + url);
			collection.find({'small': small} , {small : 0 , _id : 0}).each(function(err , data){
				if(data!=null){
					res.redirect(data['link'])
				} else{
					res.send('404 page not found');
				}

			});
		}
	})
}

module.exports.find = find;
module.exports.insert = insert;
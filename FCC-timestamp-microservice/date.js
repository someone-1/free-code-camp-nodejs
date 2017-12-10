function returnDate(time){
	var month = ['Janury' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
	//if time is a number 
	if(!isNaN(time)){
		var unix = time;
		var natural = new Date(time*1000);
		natural = month[natural.getMonth()] +' '+ natural.getDate() +', '+ natural.getFullYear();
		var data = {unix : unix, natural : natural}
		//res.json(data);
		return data;
	}
	else{
		var natural = new Date(time);
		if(isNaN(natural)){
			var data = {unix : null, natural : null};
			//res.json(data);
			return data;
		}
		else{
			var unix = natural/1000;
			natural = month[natural.getMonth()] +' '+ natural.getDate() +', '+ natural.getFullYear();
			var data = {unix : unix, natural : natural};
			//res.json(data);
			return data;
		}
	}
}
exports.returnDate = returnDate;
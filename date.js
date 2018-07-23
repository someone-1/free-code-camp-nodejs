function returnDate(time){

	
	if(!isNaN(time)){
		// the time is number
		let unixTime = Number(time);
		unixTime = new Date(unixTime*1000);
		if(isNaN(unixTime.getTime())){
			// if Date().getTime() returns int its a valid date
			// else it is not a valid date
			return({
				"error":"Invalid Date"
			})
		}
		return({
			"unix": unixTime.getTime(),
			"utc": unixTime.toUTCString()
		});
	} else {
		let unixTime = new Date(time);
		if(isNaN(unixTime.getTime())){
			return ({
				"error":"Invalid Date"
			})
		}
		return ({
			"unix" : unixTime.getTime(),
			"utc" : unixTime.toUTCString()
		})
	}
}

module.exports.returnDate = returnDate;
const Comments = require('../lib');


module.exports = {
	
	insertComment: (request, response) => {
		
		const alert = request.body;
		
		//For data Validation i can use some more efficient library like Joy.
		if(alert.reference_id && alert.delay && alert.description){
			Users.createAlert(alert)
			.then((alert) => {

	            response.status(201).json({
	                "alert": {
	                	"reference_id":alert.reference_id,
	                	"delay" : alert.delay,
	                	"description":alert.description
	                }
	            });
			})
			.catch((error) => {

				response.status(error.code).json(error.message);
				console.log(error);
			})
		}else{
			response.status(400).json("Bad Request");
		}
		
	},

	getAllComments: (request, response) => {
		
		let skip = request.query.skip;
		let limit = request.query.limit;
		
		Users.getAllAlerts(limit,skip)
			.then((alert) => {
				
				response.status(200).json({"alerts":alert});
			})
			.catch((error) => {
				response.status(500).json({"message":"Internal Server Issue"});
				console.log(error);
			})
	},
	
	deleteComment: (request, response) => {

		let reference_id = request.params.reference_id;
		
		Users.deleteAlert(reference_id)
			.then((alert) => {
				//console.log(alert);
				if(alert)	
					response.status(204).json({});
				else
					response.status(404).json("Alert with reference_id : " +reference_id +" couldn't be found");
			})
			.catch((error) => {
				console.log(error);
				response.status(500).json({"message":"Internal Server Issue"});
			})
	}
};
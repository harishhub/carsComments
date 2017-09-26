const Comments = require('../lib/comments');


module.exports = {
	
	insertComment: (request, response) => {
		
		const comment = request.body;
		
		//For data Validation i can use some more efficient library like Joy.
		if(comment.carId && comment.userId && comment.comment){
			Comments.createComment(comment)
			.then((comment) => {

	            response.status(201).json({
	                "comment": /*{
	                	"reference_id":alert.reference_id,
	                	"delay" : alert.delay,
	                	"description":alert.description
	                }*/ comment
	            });
			})
			.catch((error) => {

				response.status(error.code).json(error.message);
				console.log(error);
			})
		}else{
			response.status(400).json("Bad Request");
		}
		
	}/*,

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

	getUserComments: (request, response) => {
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
	}*/
};
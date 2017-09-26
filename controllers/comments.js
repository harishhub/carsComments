const Comments = require('../lib/comments');


module.exports = {
	
	insertComment: (request, response) => {
		
		const comment = request.body;
		
		//For data Validation i can use some more efficient library like Joy.
		if(comment.carId && comment.userId && comment.comment){
			Comments.createComment(comment)
				.then((comment) => {

		            response.status(201).json({
		                "comment": comment
		            });
				})
				.catch((error) => {
					response.status(error.code).json(error.message);
					console.log(error)
				})
		}else{
			response.status(400).json("Bad Request");
		}
		
	},

	getAllComments: (request, response) => {
		
		let skip = request.query.skip;
		let limit = request.query.limit;
		
		Comments.getAllComments(limit,skip)
			.then(comments => {
				
				response.status(200).json({"comments":comments,"count":comments.length});
			})
			.catch((error) => {
				response.status(500).json({"message":"Internal Server Issue"});
				console.log(error);
			})
	},

	getUserComments: (request, response) => {
		let skip = request.query.skip;
		let limit = request.query.limit;
		let userId = request.params.userId;

		Comments.getUserComments(limit,skip,userId)
			.then((comments) => {
				
				response.status(200).json({"comments":comments,"count":comments.length});
			})
			.catch((error) => {
				response.status(500).json({"message":"Internal Server Issue"});
				console.log(error);
			})
	}
};
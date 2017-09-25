const Users = require('../lib/users');


module.exports = {
	
	insertUser: (request, response) => {
		
		const user = request.body;
		
		//For data Validation i can use some more efficient library like Joy.
		
		if(user.name && user.userName && user.email){
			Users.createUser(user)
			.then((user) => {

	            response.status(201).json({
	                "user": {
	                	"name":user.name,
	                	"userName" : user.userName,
	                	"email":user.email
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

	getAllUsers: (request, response) => {
		
		let skip = request.query.skip;
		let limit = request.query.limit;
		
		Users.getAllUsers(limit,skip)
			.then((users) => {
				
				response.status(200).json({"users":users});
			})
			.catch((error) => {
				response.status(500).json({"message":"Internal Server Issue"});
				console.log(error);
			})
	}
};
const Cars = require('../lib/cars');


module.exports = {
	
	insertCar: (request, response) => {
		
		const car = request.body;
		
		//For data Validation i can use some more efficient library like Joy.
		if(car.carName && car.carBrand && car.carDescription){
			Cars.createCar(car)
			.then((car) => {

	            response.status(201).json({
	                "car": {
	                	"carName":car.carName,
	                	"carBrand" : car.carBrand,
	                	"carDescription":car.carDescription
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

	getAllCars: (request, response) => {
		
		let skip =  request.query.skip;
		let limit = request.query.limit;
		
		Cars.getAllCars(limit,skip)
			.then((cars) => {
				
				response.status(200).json({"cars":cars,"count":cars.length});
			})
			.catch((error) => {
				response.status(500).json({"message":"Internal Server Issue"});
				console.log(error);
			})
	}
};
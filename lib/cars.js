const CarModel = require('../models/cars');


module.exports = {
    createCar: (car) => {

        return new Promise((resolve, reject) => {

            const newCar = {
                carName: car.carName,
                carBrand: car.carBrand,
                carDescription: car.carDescription,
            };

            CarModel.findOne({
                    carName  : newCar.carName,
                    carBrand : newCar.carBrand
                }).exec()
                .then((result) => {

                    if (result) {

                        var err = new Error();
                        err.code = 409;
                        err.message = "DATA CONFICT : Car already exists with the given name and brand"
                        throw err;
                    } else {

                        return new CarModel(newCar).save();
                    }
                })
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    getAllCars: (limit, skip) => {
        skip = parseInt(skip) || 0;
        limit = parseInt(limit) || 1000;

        return CarModel.find({}, {
           "_id": 0,
           "__v":0
        }).skip(skip).limit(limit).lean().exec();
    }
}
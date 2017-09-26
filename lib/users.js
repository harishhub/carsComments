const UsersModel = require('../models/users');


module.exports = {
    createUser: (user) => {

        return new Promise((resolve, reject) => {

            const newUser = {
                name: user.name,
                userName: user.userName,
                email:user.email
            };

            UsersModel.findOne({$or:[{userName  : user.userName},{email : user.email}]}).exec()
                .then((result) => {
                    
                    if (result) {

                        var err = new Error();
                        err.code = 409;
                        err.message = "DATA CONFICT : User already exists with the given email or userName"
                        throw err;
                    } else {

                        return new UsersModel(newUser).save();
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
    getAllUsers: (limit, skip) => {
        skip = parseInt(skip) || 0;
        limit = parseInt(limit) || 1000;

        return UsersModel.find({}, {
           "_id": 0,
           "__v":0
        }).skip(skip).limit(limit).lean().exec();
    }
}
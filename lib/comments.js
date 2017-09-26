const CommentsModel = require('../models/comments');
const CarsModel = require('../models/cars');
const UsersModel = require('../models/users');


module.exports = {
    createComment: (comment) => {

        return new Promise((resolve, reject) => {

            const newComment = {
                comment : comment.comment,
                userId  : comment.userId,
                carId   : comment.carId
            };

            CarsModel.findOne({_id:newComment.carId}).exec()
                .then((result) => {
                    
                    if (!result) {

                        var err = new Error();
                        err.code = 409;
                        err.message = "DATA Error : CarId doesn't exist"
                        throw err;
                    } else {
                        return UsersModel.findOne({ _id : newComment.userId}).exec()
                    }
                })
                .then((userResult) => {

                    console.log(userResult);
                    process.exit();
                    if (!userResult) {

                        var err = new Error();
                        err.code = 409;
                        err.message = "DATA Error : UserId doesn't exist"
                        throw err;
                    } else {
                        return new CommentsModel(newComment).save();
                    }
                })
                .then((result) => {
                    resolve(result)
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }/*,
    getAllUsers: (limit, skip) => {
        skip = parseInt(skip) || 0;
        limit = parseInt(limit) || 1000;

        return UsersModel.find({}, {
           "_id": 0,
           "__v":0
        }).skip(skip).limit(limit).lean().exec();
    }*/
}
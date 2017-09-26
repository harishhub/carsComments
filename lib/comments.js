const CommentsModel = require('../models/comments');
const CarsModel = require('../models/cars');
const UsersModel = require('../models/users');


module.exports = {
    createComment: (comment) => {

        return new Promise((resolve, reject) => {

            const newComment = {
                comment: comment.comment,
                userId: comment.userId,
                carId: comment.carId
            };

            CarsModel.findOne({
                    _id: newComment.carId
                }).exec()
                .then((result) => {

                    if (!result) {

                        var err = new Error();
                        err.code = 409;
                        err.message = "DATA Error : CarId doesn't exist"
                        throw err;
                    } else {

                        return UsersModel.findOne({
                            _id: newComment.userId
                        }).exec();
                    }
                })
                .then((userResult) => {

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

                    CommentsModel.findOne({
                            _id: result._id,
                        })
                        .populate('userId', ["userName"])
                        .populate('carId', ["carName"])
                        .lean().exec(function(err, populateResult) {

                            if (!err)
                                resolve(populateResult);
                            else
                                reject(err);
                        })
                })
                .catch((error) => {

                    if (!error.code) {

                        var err = new Error();
                        err.code = 500;
                        err.message = error.message || "Server Error"

                        return reject(err);

                    } else {
                        reject(error);
                    }
                })
        })
    },
    getAllComments: (limit, skip) => {
        skip = parseInt(skip) || 0;
        limit = parseInt(limit) || 1000;

        return CommentsModel.find({}, {
                "_id": 0,
                "__v": 0
            })
            .populate('userId', ["name"])
            .populate('carId', ["carName"])
            .skip(skip)
            .limit(limit)
            .lean().exec()
    },
    getUserComments: (limit, skip, userId) => {
        skip = parseInt(skip) || 0;
        limit = parseInt(limit) || 1000;

        return CommentsModel.find({"userId":userId}, {
                "_id": 0,
                "__v": 0
            })
            .populate('userId', ["name"])
            .populate('carId', ["carName"])
            .skip(skip)
            .limit(limit)
            .lean().exec()
    }
}
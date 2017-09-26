'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const CommentsSchema = new Schema({
	comment: {
		type: String,
		trim: true,
		required: "Comment is Required"
	},
	userId: {
		type: Schema.ObjectId, 
		ref : 'users',
		required: "userId is Required"
	},
	carId: {
		type: Schema.ObjectId,
		ref : "cars",
		required: "carId is Required"
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('comment', CommentsSchema);
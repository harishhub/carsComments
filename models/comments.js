'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const CommentsSchema = new Schema({
	comment: {
		type: String,
		trim: true,
		required: "Comment is Required"
	}/*,
	userName: {
		type: String,
		//unique: true,
		trim:true,
		required: "userName is Required"
	},
	email: {
		type: String,
		//unique: true,
		trim:true,
		required: "email is Required"
	}*/
}, {
	timestamps: true
});

module.exports = mongoose.model('comment', CommentsSchema);
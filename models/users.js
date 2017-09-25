'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

/**
 * [Users Schema holds details related to Alert]
 * @type {Object}
*/

const UsersSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: "User Name is Required"
	},
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
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('users', UsersSchema);
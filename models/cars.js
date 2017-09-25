'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

/**
 * [CarsSchema holds details related to Alert]
 * @type {Object}
*/

const CarsSchema = new Schema({
	carName: {
		type: String,
		trim: true,
		required: "CarName is Required"
	},
	carBrand: {
		type: String,
		trim:true,
		required: "CarBrand is Required"
	},
	carDescription: {
		type: String,
		trim: true,
		required: "carDescription is Required"
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('cars', CarsSchema);
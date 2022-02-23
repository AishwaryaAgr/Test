/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provideSchema = new Schema({
	currentUserName: {
		type: String,
		required: true,
	},
	currentUserNumber: {
		type: Number,
		required: true,
	},
	batteryId: {
		type: Number,
		required: true,
	},
	soc: {
		type: Number,
		required: true,
	},
	station: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Provide = mongoose.model('provide', provideSchema);

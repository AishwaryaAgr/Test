/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const swapSchema = new Schema({
	scooterId: {
		type: String,
		required: false,
	},
	currentUserName: {
		type: String,
		required: false,
	},
	currentUserNumber: {
		type: Number,
		required: false,
	},
	batteryId: {
		type: Number,
		required: false,
	},
	amount: {
		type: String,
		required: false,
	},
	mode: {
		type: String,
		default: "404"
	},
	socFrom: {
		type: Number, 
		required: false,
	},
	socTo: {
		type: Number,
		required: false,
	},
	station: {
		type: String,
		required: false,
	},
	stationPrev: {
		type: String,
		required: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Swap = mongoose.model('swap', swapSchema);

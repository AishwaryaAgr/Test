/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
	scooterId: {
		type: String,
		required: true,
	},
	status:{
		type: String,
		default: "Not Assigned"
	},
	currentUserName: {
		type: String,
		default: "Not Assigned",
		required: true,
	},
	currentUserNumber: {
		type: Number,
		default: 0,
	},
	dateAlloted: {
		type: Date,
		default: Date.now,
	},
	VP: {
		type: Number,
		default: 0
	}
});

module.exports = Vehicle = mongoose.model('vehicle', vehicleSchema);

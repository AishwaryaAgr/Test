/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riderSchema = new Schema({
	scooterId: {
		type: String,
		default: "Not Assigned",
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
		default: 0,
	},
	batteryId:{
		type: String,
		default: "Not Assigned",
		required: true
	},
	batterySecurity: {
		type: Number,
		default: 0
	},
	scooterSecurity: {
		type: Number,
		default: 0
	},
	pendingSwapPayment: {
		type: Number,
		default: 0
	},
    dateAlloted: {
		type: Date,
		default: Date.now,
	},
	latestRent: {
		type: Date
	},
    dateRemoved: {
        type: Date
    },
	VRP: {
		type: Number,
		default:0
	}
});

module.exports = Rider = mongoose.model('rider', riderSchema);

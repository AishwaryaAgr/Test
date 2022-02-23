/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentSchema = new Schema({
	scooterId: {
		type: String,
		required: true,
	},
	currentUserName: {
		type: String,
		required: true,
	},
	currentUserNumber: {
		type: Number,
		default: 0,
	},
	amount: {
		type: Number,
		required: true,
	},
	mode: {
		type: String,
		required: true,
	},
	datePaid: {
		type: Date,
		default: Date.now,
	},
	VP: {
		type: String,
		default: "0"
	}
});

module.exports = Rent = mongoose.model('rent', rentSchema);

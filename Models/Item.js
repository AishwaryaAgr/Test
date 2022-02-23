/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	batteryId: {
		type: String,
		required: true,
	},
	batteryCharge:{
		type: Number,
		required: true
	},
	status: {
		type: String,
		default: "Not Assigned"
	},
	currentUserNumber: {
		type: Number,
		default: 0
	},
	station: {
		type:String,
		default: "Null"
	},
	date: {
		type: Date,
		default: Date.now,
	},

});

module.exports = Item = mongoose.model('item', itemSchema);

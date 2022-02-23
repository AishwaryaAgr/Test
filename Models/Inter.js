/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interSchema = new Schema({
	scooterId: {
		type: String,
		required: true,
	},
	batterySecurity:{
		type: Number,
		required: true
	},
	scooterSecurity:{
		type: Number,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	userNumber: {
		type: Number,
		required: true
	},
	vehiclePartner: {
		type:String,
		required: true
	},
    status:{
        type: String,
        default: "Unpaid"
    },
    reason:{
        type: String,
        default: "Rent Not Paid"
    },
	date: {
		type: Date,
		default: Date.now,
	},

});

module.exports = Inter = mongoose.model('inter', interSchema);

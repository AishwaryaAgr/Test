/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const securitySchema = new Schema({
	
	date: {
		type: Date,
		default: Date.now,
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
        required: true,
    },
    action:{
        type: Number,
        required: true
    },
    event: {
        type:String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    batteryAmount: {
        type: Number,
        default: 0
    },
    scooterId: {
        type:String,
        required: true
    }

});

module.exports = Security = mongoose.model('security', securitySchema);

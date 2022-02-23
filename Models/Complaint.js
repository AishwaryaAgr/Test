/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
	productType: {
        type: String,
        required: true
    },
    complaintType: {
        type: String,
        required: true
    },
    complaintDate:{
        type:String,
        default: Date.now
    },
    componentId:{
        type: String,
        required: true
    },
    currentUserNumber:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    description: {
        type: Object,
        default: {}
    }

});

module.exports = Complaint = mongoose.model('complaint', complaintSchema);

/** @format */

const express = require('express');
const router = express.Router();

const Security = require('../../Models/Security');

router.get('/', (req, res) => {
	Security.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newSecurity = new Security({
		scooterId: req.body.scooterId,
		userName: req.body.userName,
		userNumber: req.body.userNumber,
		amount: req.body.amount,
        action: req.body.action,
        vehiclePartner: req.body.vehiclePartner,
        event: req.body.event,
		batteryAmount: req.body.batteryAmount
	});
	newSecurity.save().then((item) => res.json(item));
});

module.exports = router;

/** @format */

const express = require('express');
const router = express.Router();

const Inter = require('../../Models/Inter');

router.get('/', (req, res) => {
	Inter.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newInter = new Inter({
		scooterId: req.body.scooterId,
		userName: req.body.userName,
		userNumber: req.body.userNumber,
		batterySecurity: req.body.batterySecurity,
		scooterSecurity: req.body.scooterSecurity,
        vehiclePartner: req.body.vehiclePartner,
		reason: req.body.reason
	});
	newInter.save().then((item) => res.json(item));
});

module.exports = router;

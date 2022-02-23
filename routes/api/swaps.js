/** @format */

const express = require('express');
const router = express.Router();

const Swap = require('../../Models/Swap');

router.get('/', (req, res) => {
	Swap.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newSwap = new Swap({
		scooterId: req.body.scooterId,
		currentUserName: req.body.name,
		currentUserNumber: req.body.number,
		batteryId: req.body.batteryId,
		amount: req.body.amount,
		mode: req.body.mode,
		socFrom: req.body.socFrom,
		socTo: req.body.socTo,
		station: req.body.station,
		stationPrev: req.body.stationPrev,
	}); 
	newSwap.save().then((item) => res.json(item));
});

module.exports = router;

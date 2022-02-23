/** @format */

const express = require('express');
const router = express.Router();

const Swap = require('../../Models/Provide');

router.get('/', (req, res) => {
	Provide.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newProvide = new Provide({
		currentUserName: req.body.name,
		currentUserNumber: req.body.number,
		batteryId: req.body.batteryId,
		soc: req.body.soc,
		station: req.body.station,
	});
	newProvide.save().then((item) => res.json(item));
});

module.exports = router;

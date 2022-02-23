/** @format */

const express = require('express');
const router = express.Router();

const Vehicle = require('../../Models/Vehicle');

router.get('/', (req, res) => {
	Vehicle.find().then((items) => res.json(items));
});

router.get('/:id', (req, res) => {
	Vehicle.findOne({
		scooterId: `${req.params.id}`,
	}).then((item) => res.json(item));
});

router.post('/', (req, res) => {
	const newVehicle = new Vehicle({
		scooterId: req.body.scooterId,
		VP: req.body.vp
	});
	newVehicle.save().then((item) => res.json(item));
});

router.put('/allot/:id', (req, res) => {
	Vehicle.updateOne(
		{ scooterId: `${req.params.id}` },
		{
			$set: {
				currentUserName: `${req.body.name}`,
				currentUserNumber: `${req.body.number}`,
				dateAlloted: new Date(),
				status: 'Assigned',
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.put('/unallot/:id/:number', (req, res) => {
	Vehicle.updateOne(
		{ scooterId: `${req.params.id}` },
		{
			$set: {
				currentUserName: `Not Assigned`,
				currentUserNumber: req.params.number,
				dateAlloted: new Date(),
				status: req.body.status,
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});
module.exports = router;

/** @format */

const express = require('express');
const router = express.Router();

const Rider = require('../../Models/Rider');

router.get('/', (req, res) => {
	Rider.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.get('/one/:number', (req, res) => {
	Rider.findOne({ number: `${req.params.number}` }).then((items) => res.json(items));
});

router.get('/scooter/:id', (req, res) => {
	Rider.findOne({ scooterId: `${req.params.id}` }).then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newRider = new Rider({
		name: req.body.name,
		number: req.body.number,
	});
	newRider.save().then((item) => res.json(item));
});

router.put('/removeBattery', (req, res) => {
	Rider.updateOne(
		{ number: `${req.body.number}` },
		{
			$set: { batteryId: `Not Assigned`, pendingSwapPayment: 0 },
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.put('/remoBattery', (req, res) => {
	Rider.updateOne(
		{ number: `${req.body.number}` },
		{
			$set: { VRP: 1}
		}
	).then((item) => res.json(item));
});
router.put('/remove', (req, res) => {
	Rider.updateOne(
		{ number: `${req.body.number}` },
		{
			$set: {
				scooterId: `Not Assigned`,
				dateRemoved: new Date(),
				latestRent: null,
				batteryId: 'Not Assigned',
				batterySecurity: req.body.batSec,
				scooterSecurity: req.body.scooterSec
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.delete('/', (req, res) => {
	Rider.findOneAndDelete({ number: `${req.body.number}` }).then((item) => res.json(item));
});

router.put('/add', (req, res) => {
	Rider.updateOne(
		{ number: `${req.body.number}` },
		{
			$set: {
				scooterId: `${req.body.scooterId}`,
				dateAlloted: new Date(),
				latestRent: null,
				dateRemoved: null,
				batteryId: `${req.body.batteryId}`,
				batterySecurity: `${req.body.batterySecurity}`,
				scooterSecurity: `${req.body.scooterSecurity}`,
				pendingSwapPayment: 0,
				VRP: `${req.body.vrp}`
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.put('/swap', (req, res) => {
	Rider.updateOne(
		{ scooterId: req.body.id },
		{
			$set: {
				batteryId: req.body.batteryId,
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.put('/rents', (req, res) => {
	Rider.updateOne(
		{ scooterId: req.body.id },
		{
			$set: {
				latestRent: new Date(),
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.put('/replacevehicle', (req, res) => {
	Rider.updateOne(
		{ number: `${req.body.number}` },
		{
			$set: { scooterId: `${req.body.scooterId}`, dateRemoved: null },
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.put('/replacebattery', (req, res) => {
	Rider.updateOne(
		{ number: `${req.body.number}` },
		{
			$set: {
				batteryId: `${req.body.batteryId}`,
				pendingSwapPayment: `${req.body.cost}`,
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

router.put('/changesecurity', (req, res) => {
	Rider.updateOne(
		{ number: `${req.body.number}` },
		{
			$set: {
				scooterSecurity: `${req.body.scooterSecurity}`,
				batterySecurity: `${req.body.batterySecurity}`,
			},
			$currentDate: { lastModified: true },
		}
	).then((item) => res.json(item));
});

module.exports = router;

/** @format */

const express = require('express');
const router = express.Router();

const Rent = require('../../Models/Rent');

router.get('/', (req, res) => {
	Rent.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newRent = new Rent({
		scooterId: req.body.scooterId,
		currentUserName: req.body.name,
		currentUserNumber: req.body.number,
		amount: req.body.amount,
		mode: req.body.mode,
		VP: req.body.VP
	});
	newRent.save().then((item) => res.json(item));
});

module.exports = router;

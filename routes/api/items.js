/** @format */

const express = require('express');
const router = express.Router();

const Item = require('../../Models/Item');

router.get('/', (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/:id/charge/:charge', (req, res) => {
	const newItem = new Item({
		batteryId: req.params.id,
		batteryCharge: req.params.charge
	});
	newItem.save().then((item) => res.json(item));
});

router.get('/:id', (req,res)=>{
	Item.findOne({
		"currentUserNumber" : `${req.params.id}`
	})
	.then((item)=> res.json(item));
})
router.get('/bat/:id', (req,res)=>{
	Item.findOne({
		"batteryId" : `${req.params.id}`
	})
	.then((item)=> res.json(item));
})


router.put('/give', (req,res)=>{
	Item.updateOne(
		{"batteryId" : `${req.body.id}`},
		{
			$set: {"currentUserNumber": `${req.body.user}` ,
					"station": `${req.body.station}`, 
					"batteryCharge" : `${req.body.charge}`,
					"status": "Assigned" ,
					"date" : new Date()
				},
			$currentDate: { lastModified: true }
		}
	)
	.then(item=> res.json(item))
})

router.put('/replace', (req,res)=>{
	Item.updateOne(
		{"batteryId" : `${req.body.id}`},
		{
			$set: {"currentUserNumber": 0,
					"status": `${req.body.status}` ,
					"date" : new Date(),
					"batteryCharge": `${req.body.soc}`
				},
			$currentDate: { lastModified: true }
		}
	)
	.then(item=> res.json(item))
})
router.put('/repair', (req,res)=>{
	Item.updateOne(
		{"batteryId" : `${req.body.id}`},
		{
			$set: {"currentUserNumber": 0,
					"status": "Not Assigned" ,
					"batteryCharge" : req.body.soc,
					"station" : req.body.station,
					"date" : new Date()
				},
			$currentDate: { lastModified: true }
		}
	)
	.then(item=> res.json(item))
})

router.put('/under', (req,res)=>{
	Item.updateOne(
		{"batteryId" : `${req.body.id}`},
		{
			$set: {"currentUserNumber": 0,
					"status": "Under Maintenance" ,
					"date" : new Date()
				},
			$currentDate: { lastModified: true }
		}
	)
	.then(item=> res.json(item))
})

router.put('/:id/take/:charge/:station', (req,res)=>{
	Item.updateOne(
		{"batteryId" : `${req.params.id}`},
		{
			$set: {"currentUserNumber": 0 , "status": "Not Assigned" ,"batteryCharge" : `${req.params.charge}` , "station": `${req.params.station}`, "date" : new Date()},
			$currentDate: { lastModified: true }
		}
	)
	.then(item=> res.json(item));
})
router.put('/:id/remove', (req,res)=>{
	Item.updateOne(
		{"batteryId" : `${req.params.id}`},
		{
			$set: {"currentUserNumber": 0 , "status": "Not Assigned" , "station": `Removed`, "date" : new Date()},
			$currentDate: { lastModified: true }
		}
	)
	.then(item=> res.json(item));
})

module.exports = router;

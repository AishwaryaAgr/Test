/** @format */

const express = require('express');
const router = express.Router();

const Complaint = require('../../Models/Complaint');

router.get('/', (req, res) => {
	Complaint.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

router.post('/', (req, res) => {
	const newComplaint = new Complaint({
		productType: req.body.productType,
		complaintType: req.body.complaintType,
		description: req.body.desc,
		complaintDate: req.body.date,
		componentId: req.body.id,
		currentUserNumber: req.body.number
	});
	newComplaint.save().then((item) => res.json(item));
});

router.post('/repair', (req, res) => {
	const newComplaint = new Complaint({
		productType: req.body.productType,
		complaintType: req.body.complaintType,
		description: req.body.desc,
		componentId: req.body.id,
		currentUserNumber: 0
	});
	newComplaint.save().then((item) => res.json(item));
});

router.get('/error/:id/:error', (req,res)=>{
	Complaint.find(
		{"componentId" : `${req.params.id}`},
	)
	.then(item => {
		for(var i=item.length-1;i>=0;i--){
			// console.log(item[i]);
			if(item[i].complaintType !== "Item Repaired")
				return item[i];
		}
		return null;
	})
	.then(item => {
		if(item === null)
			return res.json(item);
		let change = [];
		if(item.description.change)
			change = [...item.description.change];

		change.push(`${req.params.error}`)
		item.description.change = change;
		Complaint.updateOne(
			{"_id" : item._id},
			{
				$set: {"description": item.description},
				$currentDate: { lastModified: true }
			}
		)
		.then(item=> res.json(item));
	});
})

router.get('/solution/:id/:method', (req,res)=>{
	Complaint.find(
		{"componentId" : `${req.params.id}`},
	)
	.then(item => {
		for(var i=item.length-1;i>=0;i--){
			// console.log(item[i]);
			if(item[i].complaintType === "Item Repaired")
				return item[i];
		}
		return null;
	})
	.then(item => {
		let change = [];
		if(item.description.change)
			change = [...item.description.change];

		change.push(`${req.params.method}`)
		item.description.change = change;
		Complaint.updateOne(
			{"_id" : item._id},
			{
				$set: {"description": item.description},
				$currentDate: { lastModified: true }
			}
		)
		.then(item=> res.json(item));
	});
})

module.exports = router;

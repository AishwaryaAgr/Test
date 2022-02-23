/** @format */

const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const vehicles = require('./routes/api/vehicles');
const rents = require('./routes/api/rents');
const swaps = require('./routes/api/swaps');
const riders = require('./routes/api/riders');
const complaints = require('./routes/api/complaints');
const inter = require('./routes/api/inter');
const security = require('./routes/api/security');
const provides = require('./routes/api/provides');
require("dotenv").config(); 

const app = express();
const cors = require('cors');
app.use(cors({ origin: '*',  
credentials:true,            //access-control-allow-credentials:true
optionSuccessStatus:200,}));

app.use(express.json());

const DB = require('./config/keys').mongoURI;

mongoose
	.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('MongoDb Connected');
	})
	.catch((err) => {
		console.log(err.message);
	});

//Use Routes

app.use('/api/items', items);
app.use('/api/vehicles', vehicles);
app.use('/api/rents', rents);
app.use('/api/swaps', swaps);
app.use('/api/riders', riders);
app.use('/api/complaints', complaints);
app.use('/api/inter', inter);
app.use('/api/security', security);
app.use('/api/provide', provides);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

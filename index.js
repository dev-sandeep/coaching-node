const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/app/routes');
const { mongoose } = require('mongoose');

//establishing mongo db connection
mongoose.connect("mongodb://127.0.0.1:27017/foodadda");

dotenv.config();
const app = express();

// set all the routes
router.loadRoutes(app);

// start the server
const port = process.env.PORT;
app.listen(port, () => console.log('Server listening on port '+ port))
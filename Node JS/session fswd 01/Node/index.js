const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/app/routes');

dotenv.config();
const app = express();

// set all the routes
router.loadRoutes(app);

// start the server
const port = process.env.PORT;
app.listen(port, () => console.log('Server listening on port '+ port))
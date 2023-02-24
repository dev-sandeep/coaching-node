const express = require('express');

const app = express();
// Attach the express.json middleware to route "/uname"
app.use('/uname', express.json());

// handle post request for path /uname
app.post('/uname', (request, response) => {
    response.json(request.body.firstName)
})

// start the server
app.listen(5000, () => console.log('Server listening on port 5000.'))
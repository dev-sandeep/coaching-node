const express = require('express');

const app = express();
app.use(express.static('static-files'));

// Route for handling get request for path /
// app.get('/sample.css', (request, response) => {response.send('jekje')});
app.get('/sample', (request, response) => {
    response.send('{messaage: This is sample response}');
})

// Route for handling post request for path /products
app.post('/products', (request, response) => {
  response.json([]);
})

// start the server
app.listen(5000, 
   () => console.log('Server listening on port 5000.'))
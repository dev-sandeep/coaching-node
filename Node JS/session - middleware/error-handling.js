const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const errorMiddleware = require('./middlewares/error-handlers');

const app = express();
// Attach the express.json middleware to route "/uname"
app.use('/uname', express.json());
// Attaching custom error middleware

app.get('/error', (request, response, next) =>{
    setTimeout(() => {
        try {
            console.log("Async code example.")
            throw new Error("Hello Error!")
        } catch (error) { // manually catching
            next(error) // passing to default middleware error handler
        }
    }, 1000)
});

app.get('/custom-error', (req, res)=>{
    console.log('checking error');
    throw new Error('sending custom error');
})

// handle post request for path /uname
app.post('/uname', (request, response) => {
    response.json(request.body.firstName)
})

app.use(errorMiddleware.customErrorHandlerMiddleware);

// start the server
const port = process.env.PORT;
app.listen(port, () => console.log('Server listening on port '+port))
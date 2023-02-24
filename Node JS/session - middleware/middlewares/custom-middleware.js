const express = require('express');
const app = express();

const customMiddleWare = (request, response, next)=>{
    console.log(request.body);
    if(!request.body.firstName){
        response.status(400).send("You must pass a firstName");
    }else{
        next();
    }
}
// Attach the express.json middleware to route "/uname"
app.use('/uname', express.json());

// handle post request for path /uname
app.post('/uname', customMiddleWare, (request, response) => {
    response.json(request.body.firstName)
})


const sampleMiddleware = (request, response, next)=>{
    // request.name = 'shreyas'
    if(request.params.id < 1000){
        response.send("Invalid");
    }else{
        next();
    }
}

// /sample/1001 --- 99
app.get('/sample/:id', sampleMiddleware, (request, response)=>{
    console.log(request.params.id);//31
    response.send('123 valid');
})

// start the server
app.listen(5000, () => console.log('Server listening on port 5000.'))
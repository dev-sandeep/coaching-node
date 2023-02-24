const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
// Attach the express.json middleware to route "/uname"
app.use('/uname', express.json());




const appMiddleWare = (req, res, next)=>{
    if(req.params.id < 1000){
        res.status(500).send('Invalid id');
    }else{
        next();
    }
}
//Application level middleware
// app.use(appMiddleWare);

//Rote level middleware
// app.use('/sample', appMiddleWare);

// handle post request for path /uname
app.post('/uname', (request, response) => {
    response.json(request.body.firstName)
})

app.get('/sample/:id', appMiddleWare, (request, response) => {
    response.send("all is well");
})

// start the server
const port = process.env.PORT;
app.listen(port, () => console.log('Server listening on port '+port))
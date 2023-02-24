// importing express
var express = require('express');
var app = express();

app.get('/uname/:user_name', (request, response)=>{
    console.log(request.params);
    response.send('Hello '+request.query.fnam+' '+request.query.lnam+' '+request.params.user_name);
})

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

// app.put('/update-data', function (req, res) {
//     res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('DELETE Request');
// });

app.listen(5000, function () {
    console.log('Node server is running..');
});
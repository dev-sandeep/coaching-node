var express = require('express');
var fs = require('fs');
var app = express();

app.get('/movies', function (req, res) {
    fs.readFile('./main/sample-resp.json', 'utf8', (err, data)=>{
        res.json(data);
    });
});

app.get('/movies', function (req, res) {
    res.send("Hello Happiness!");
 });

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
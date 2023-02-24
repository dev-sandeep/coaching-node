var express = require('express');
var app = express();

var bodyparser = require("body-parser");
var urlencodedParser = bodyparser.urlencoded({ extended: false });
app.use('/submit-student-data',bodyparser.json());

app.get('/hello', function (req, res) {
    console.log(req.params);
    res.send('Hello Happiness');
});

app.post('/submit-student-data', urlencodedParser, function (req, res) {
    var name = req.body.fname + ' ' + req.body.lname;
    res.send(name+' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
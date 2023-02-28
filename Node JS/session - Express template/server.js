var express = require('express');
var { data } = require('./data');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// app.get('/', (req, res)=>{
//     res.render('pages/sample',{
//         data: data
//     });
// })
// index page
app.get('/', function (req, res) {
    res.render('pages/index', {
      product: data[0],
      products: data
    });
  });

app.listen(8080);
console.log('Server is listening on port 8080');
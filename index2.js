var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res) {
  console.log(req);
  res.render('public/home');
}).listen(8080);
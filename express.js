'use strict';

var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('frontend'));
app.get('/dist', function (req, res) {
  res.sendfile('./frontend/dist');
});
app.get('/', function(req, res) {
  res.sendfile('./frontend/index.html');
});

app.listen(5000);
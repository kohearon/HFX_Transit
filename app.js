var express = require('express');
var axios = require('axios');

var app = express();

app.get('/all-vehicles', function (req, res) {
  res.sendStatus(200)
})

app.listen(3000, function () {})

module.exports = app;

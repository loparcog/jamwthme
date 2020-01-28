var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/page.html');
});

serv.listen(2000);
console.log("Server started on localhost:2000");
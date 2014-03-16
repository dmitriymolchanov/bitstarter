var express = require('express');
var fs = require('fs');
var http = require('http');

var app = express();
app.use(express.logger());

var content = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  response.send(content.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

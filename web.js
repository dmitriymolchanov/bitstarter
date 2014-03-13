var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.logger());

var content = fs.readFileSync("html.index");
console.log(content.toString('utf8');


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

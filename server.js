var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

port = 3333 || process.env.PORT;
app.listen(port)
console.log("server is listening on port 3333")

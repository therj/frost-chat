var express = require("express");
var app = express();
var server = app.listen(9090, function () {
console.log("Listening on port 9090");
});

app.use(express.static("public"));
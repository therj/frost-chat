var express = require("express");
var app = express();
var socket = require("socket.io");


var server = app.listen(9090, function () {
    console.log("Listening on port 9090");
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function(socket){
    console.log("Socket connection made "+ socket.id);
    socket.on("chat", function (data) {
        console.log(data);
        io.sockets.emit("chat", data);
    });

    socket.on("typing", function (data) {
        console.log(data);
        socket.broadcast.emit("typing", data)
    });
});




//Create  connection
var socket = io.connect("http://localhost:9090");

//Query DOM
var message = document.querySelector("#message");
var handle = document.querySelector("#handle");
var btn = document.querySelector("#send");
var output  = document.querySelector("#output");


//Emit event
btn.addEventListener("click", function () {
    socket.emit('chat', {
        handle: handle.value,
        message:message.value
    });
});

//Listen event

socket.on("chat", function (data) {
    output.innerHTML += "<p><strong>" + data.handle +":</strong>" + data.message + "</p>";
});
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket) {
    // to send message to the client
    socket.emit('announcements', { message: 'Message from server!' });
});
io.on('connection', function(socket) {
    // to receive message from the client
    socket.on('event', function(data) {
        console.log('A client sent us this message:', data.message);
    });
});
// listens to the port 8080
server.listen(8080);

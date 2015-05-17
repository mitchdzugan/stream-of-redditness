var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = [];

app.use(express.static('../client/stream-of-redditness-ionic/www/'));


app.get('/', function (req, res){
  res.sendFile('../client/stream-of-redditness-ionic/www/index.html');
});

io.on('connection', function (socket) {
  socket.on('login', function (name) {
  });

  socket.on('sendMessage', function (name, message) {
  });

  socket.on('disconnect', function () {
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

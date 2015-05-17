var express = require('express');
var app = express();
var http = require('http');
var request = require('request');
var server = http.Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

auth = "Basic " + new Buffer(fs.readFileSync("auth")).toString("base64");

var authorizing = {};

app.use(express.static('../client/stream-of-redditness-cordova/www/'));


app.get('/', function (req, res){
  res.sendFile('../client/stream-of-redditness-cordova/www/index.html');
});

app.get("/auth", function (req, res) {
  if (Object.keys(authorizing).indexOf(req.query.state) != -1) {
  	request.post({
		url: 'https://www.reddit.com/api/v1/access_token',
		headers: {
			"Authorization" : auth
		},
		form: {
			grant_type: 'authorization_code', 
			code: req.query.code,
			redirect_uri: 'http://localhost:3000/auth'
		}
	}, function(err, httpResponse, body) {
			console.log(httpResponse);
			console.log(body);
		}
	);
  }
  res.send("Hello");
});

io.on('connection', function (socket) {
  console.log("A user Connected");

  socket.on('requestAuth', function (name) {
  	var authIdGen = function() {
  		var randomTextGen = function() {
			var text = "";
			var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
			for( var i=0; i < 5; i++ )
			    text += possible.charAt(Math.floor(Math.random() * possible.length));
			return text;
		};
		var authId = randomTextGen();
		while(Object.keys(authorizing).indexOf(authId) != -1) {
			authId = randomTextGen();
		}
		authorizing[authId] = {socket: socket, time: Date.now()};
		return authId;
	};
	var authUrl = "https://www.reddit.com/api/v1/authorize?"       + 
	              "client_id=-rQFIlIkDCNYRA&response_type=code&"   +
                  "state=" + authIdGen() + "&redirect_uri="        +
                  "http://localhost:3000/auth&duration=permanent&" +
                  "scope=identity,edit,save,submit,vote"
  	socket.emit("authVal", authUrl);
  });

  socket.on('disconnect', function () {
  console.log("A user Disconnected");
  });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});

var express = require('express');
var app = express();
var http = require('http');
var request = require('request');
var server = http.Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

auth = "Basic " + new Buffer(fs.readFileSync("auth")).toString("base64");

var authorizing = {};

app.use(express.static('../client/stream-of-redditness-ionic/www/'));


app.get('/', function (req, res){
  res.sendFile('../client/stream-of-redditness-ionic/www/index.html');
});

function getAuth(req, res) {
  function postAccessTokenResponse(err, httpResponse, body) {
	if (err) {
		console.log("reddit fail post")
		getAuth(req, res)
	} else {
		var j = JSON.parse(body);
		var authData = {
			access_token: j["access_token"],
			token_type: j["token_type"],
			expires_in: j["expires_in"],
			refresh_token: j["refresh_token"]
		};
		bearAuth = "bearer " + j["access_token"];
		request.get({
			url: 'https://oauth.reddit.com/api/v1/me',
			headers: {
				"Authorization" : bearAuth,
				"User-Agent" : "StreamOfRedditness"
			}
		}, function(err2, httpResponse2, body2) {
			if (err2) {
				console.log("reddit fail get me");
				postAccessTokenResponse(err, httpResponse, body)
			} else {
				var j = JSON.parse(body2);
				var mappedAuthData = {};
				mappedAuthData[j["name"]] = authData
				socket.emit("authData", mappedAuthData);
				console.log("success");
				console.log(mappedAuthData);
				delete authorizing[req.query.state]
			}
		});
	}
  }
  if (Object.keys(authorizing).indexOf(req.query.state) != -1) {
  	var socket = authorizing[req.query.state].socket;
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
	}, postAccessTokenResponse);
  }
  res.send("Hello");
}

app.get("/auth", getAuth);

io.on('connection', function (socket) {
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
  });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});

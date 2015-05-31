var express = require('express');
var app = express();
var http = require('http');
var request = require('request');
var server = http.Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var OpenTok = require('opentok');

var auth = "Basic " + new Buffer((process.env.REDDITAPPSECRET || fs.readFileSync("auth"))).toString("base64");
var opentokKey = "45242672";

var opentok = new OpenTok(
	opentokKey, 
	(process.env.OPENTOKAPPSECRET || String(fs.readFileSync("opentokSec"))));

var authorizing = {};
var activeThreads = {};

app.use(express.static('./client/stream-of-redditness-ionic/www/'));


app.get('/', function (req, res){
  res.sendFile('./client/stream-of-redditness-ionic/www/index.html');
});

function finishWithMsg(id, msg) {
	if (authorizing[id].redirectSocket) {
		authorizing[id].redirectSocket.emit("message", msg);
		delete authorizing[id];
	}
	else {
		authorizing[id].msg = msg;
		authorizing[id].done = true;
	}
}

function continueWithMsg(id, msg) {
	if (authorizing[id].redirectSocket) {
		authorizing[id].redirectSocket.emit("message", msg);
	}
	authorizing[id].msg = msg;
}

app.get("/auth", function (req, res) {
  if (Object.keys(authorizing).indexOf(req.query.state) != -1) {
	res.send(
		fs.readFileSync("./client/stream-of-redditness-ionic/www/auth.html")
			.toString()
			.replace("INSERTIDHERE", req.query.state));
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
	}, function(err, httpResponse, body) {
			if (err) {
				finishWithMsg(req.query.state, err);
				return;
			}
			var j = JSON.parse(body);
			if (null == j["access_token"] ||
				null == j["token_type"] ||
				null == j["expires_in"] ||
				null == j["refresh_token"]) {
				finishWithMsg(req.query.state, "Invalid authentication response from reddit:\n" + body);
				return;
			}
			continueWithMsg(req.query.state, "Initial authentication complete, verifying user.");
			var authData = {
				access_token: j["access_token"],
				token_type: j["token_type"],
				expires_at: Math.floor(Date.now() / 1000) + j["expires_in"] - 600,
				refresh_token: j["refresh_token"]
			};
			bearAuth = "bearer " + j["access_token"];
			request.get({
				url: 'https://oauth.reddit.com/api/v1/me',
				headers: {
					"Authorization" : bearAuth,
					"User-Agent" : "StreamOfRedditness"
				}
			}, function(err, httpResponse, body) {
				if (err) {
					finishWithMsg(req.query.state, err);
					return;
				}
				var j = JSON.parse(body);
				if (null == j["name"]) {
					finishWithMsg(req.query.state, "Invalid user verification response from reddit:\n" + body);
					return;
				}
				var mappedAuthData = {};
				mappedAuthData[j["name"]] = authData
				socket.emit("authData", mappedAuthData);
				finishWithMsg(req.query.state, "Authorization complete for Reddit user: <strong>" + 
					                            j["name"] + "</strong>, you may now return to the app.");
			});
		}
	);
  }
  else {
  	res.send("Invalid Authentication Request");
  }
});

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
		authorizing[authId] = {socket: socket, time: Date.now(), redirectSocket: null, done: false, msg: ""};
		return authId;
	};
	var authUrl = "https://www.reddit.com/api/v1/authorize?"       + 
	              "client_id=-rQFIlIkDCNYRA&response_type=code&"   +
                  "state=" + authIdGen() + "&redirect_uri="        +
                  "http://localhost:3000/auth&duration=permanent&" +
                  "scope=identity,edit,save,submit,vote"
  	socket.emit("authVal", authUrl);
  });

  socket.on('joinThread', function (msg) {
  	var threadId = msg.name;
  	console.log("THREAD JOIN REQUEST");
  	console.log(threadId)
  	if (Object.keys(activeThreads).indexOf(threadId) != -1) {
  		token = opentok.generateToken(activeThreads[threadId]);
  		socket.emit("threadSession", [threadId, opentokKey, activeThreads[threadId], token]);
  	} else {
  		opentok.createSession(function(err, session) {
  			if (err) throw err;
  			activeThreads[threadId] = session.sessionId;
  			token = opentok.generateToken(session.sessionId);
  			socket.emit("threadSession", [threadId, opentokKey, session.sessionId, token]);
  		});
  	}
  });

  socket.on('authPageWait', function (id) {
  	if (authorizing[id].done) {
  		socket.emit("message", authorizing[id].msg);
  		delete authorizing[id];
  	} else {
  		authorizing[id].redirectSocket = socket;
  	}
  	if (authorizing[id].msg != "") {
  		socket.emit("message", authorizing[id].msg);	
  	}
  })

  socket.on('post', function(msg) {
  	request.post({
		url: msg.uri,
		headers: {
			"Authorization" : msg.headers.authorization,
			"User-Agent" : "Stream of Redditness: A distributed reddit comment streaming client"
		},
		form: msg.params
	}, function(err, res, body) {
		console.log(body);
	});
  	console.log(msg);
  });

  socket.on('disconnect', function () {
  });
});

server.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});

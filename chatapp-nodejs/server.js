/**
 * 
 */
var mime = require('mime');
var fs = require('fs');
var http = require('http');
var path = require('path');

var cache = {};

function send404(response) {
	response.writeHead(404,{'Content-Type':'text/plain'});
	response.write('Error 404: Resource Not Found');
	response.end();
}

function sendFile(response, filePath, fileContents) {
	response.writeHead(200, {'content-type':mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
	if(cache[absPath]) {
		// serve file from cache variable
		sendFile(response, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, function(exists) {
			if (exists) {
				fs.readFile(absPath, function(err, data){
					if(err) {
						send404(response)
					} else {
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	}
}

var server = http.createServer(function(req, res){
	var filePath = false;
	if (req.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + req.url;
	}
	absPath = './' + filePath;
	serveStatic(res, cache, absPath);
});

server.listen(3000, function(){
	console.log('Server is listening at port 3000');
})

var chatServer = require('./lib/chat_server');
chatServer.listen(server);

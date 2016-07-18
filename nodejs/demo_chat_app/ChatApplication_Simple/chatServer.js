var http = require('http');
var io = require('socket.io')();
var express = require('express');
var app = new express();
var server = http.createServer(app);

app.get('/',function(req,res){
	//load the index.html page 
	res.sendFile(__dirname+'/views/index.html');
});

io.on('connection',function(socket){
	console.log('New client is connected');
	socket.on('disconnect',function(){
		console.log('client is disconnected');
	});

	socket.on('chat message',function(msg){
		console.log("Chat msg:"+msg);
		io.emit('chat message',msg);

	});
});

io.listen(server);

server.listen(4000,function(){
	console.log('server listening on 4000');
});
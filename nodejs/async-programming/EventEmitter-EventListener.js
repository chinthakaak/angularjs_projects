var net = require('net');

var server = net.createServer(function(tcpSocket){
	tcpSocket.on('data',function(echoData){
		tcpSocket.write(echoData);
	});
});

server.listen(3001,function(){
	console.log('TCP listening');
});

var serveronce = net.createServer(function(tcpSocket){
	tcpSocket.once('data',function(echoData){
		tcpSocket.write(echoData);
	});
});

serveronce.listen(3002,function(){
	console.log('TCP listening');
});
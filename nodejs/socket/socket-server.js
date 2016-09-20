/**
 * This is a TCP only server
 */
var net = require('net');
var server = net.createServer(function(socket){
//	socket.write('Hello World');
//	socket.end();
	
	socket.on('data', function(data){
		console.log('"data" event ', data.toString());
	});
});

server.listen(4000, function(){
	console.log("Socket server started at 4000");
})
/**
 * The this keyword refers to the object the function belongs to, 
 * or the window object if the function belongs to no object.
 */

var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
	this.client[id] = client;
	this.subscription[id] = function(senderId, message) {
		if (id != senderId) {
			this.clients[id].write(message);
		}
	}
	
	this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function(client) {
	var id = client.remoteAddress + ':' + client.remotePort;
	
	client.on('connection', function(client){
		channel.emit('join', id, client);
	});
	
	client.on('data', function(data) {
		data = data.toString();
		channel.emit('broadcast', id, data);
	});
});

server.listen('3333', function(){
	console.log('Server started');
});
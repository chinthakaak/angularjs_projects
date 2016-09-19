var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('join',function() {
	console.log('joining');
});

emitter.emit('join');
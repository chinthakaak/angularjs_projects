var events = require('events');
var emitter = new events.EventEmitter();

module.exports.join = function join() {
	emitter.on('join',function() {
		console.log('joining');
	});

	emitter.emit('join');
}
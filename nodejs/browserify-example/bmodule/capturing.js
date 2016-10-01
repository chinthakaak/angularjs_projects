var eventing = require('./eventing');
var events = require('events');
var emitter = new events.EventEmitter();

//eventing.join();

emitter.emit('join');

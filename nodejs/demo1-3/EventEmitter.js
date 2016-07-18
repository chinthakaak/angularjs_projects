var eventemitter = require('events').EventEmitter;
var myemitter = new eventemitter();
myemitter.on('move',function(){
	console.log('moving');
});

setInterval(function(){
	myemitter.emit('move');

	//some condition
	myemitter.emit('done');
	//clear the setInterval
},2000);


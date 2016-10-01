var emitter = require('./emitter.js');

emitter.on("someEvent", function(data) {
	console.log(data)
});
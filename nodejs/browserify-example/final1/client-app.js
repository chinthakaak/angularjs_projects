var LSN = require('./index.js')
var emitter = LSN.getEmitter();
emitter.on("someEvent", function(data) {
	console.log(data)
});
'use strict';
var emitter = require('./emitter.js');

function getEmitter() {
	return emitter;
}

module.exports = {
		getEmitter: getEmitter
}
//emitter.on("someEvent", function(data) {
//	console.log(data)
//});
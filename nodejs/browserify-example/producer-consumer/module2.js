// module2.js
var m1 = require('./module1.js');

// register event listener
m1.on("someEvent", function(data) {
    // process data when someEvent occurs
	console.log(data)
});
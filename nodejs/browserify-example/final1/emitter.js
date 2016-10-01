var EventEmitter = require('events').EventEmitter
var obj = new EventEmitter();

module.exports = obj;

setInterval(function() {
    obj.emit("someEvent", "test");
}, 1000);
//var inherits = require('util').inherits;
//var emitter = require('events').EventEmitter;
//
//inherits(producer, emitter);
//
//module.exports.producer = 
//function producer() {
////	emitter.call(this);
//	emitter.emit("data")	
//}
'use strict';

const util = require('util');
const EventEmitter = require('events');

class MyStream extends EventEmitter {
  constructor() {
    super();
  }
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

exports = stream;
//stream.on('data', (data) => {
//  console.log(`Received data: "${data}"`);
//});
//stream.write('With ES6');


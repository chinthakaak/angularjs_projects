//var producer = require('./event_producer');
//producer.on('data', function(){
//    console.log("found data");
//});

var stream = require('./event_producer');

stream.on('data', (data) => {
	  console.log(`Received data: "${data}"`);
});
stream.write('With ES6');
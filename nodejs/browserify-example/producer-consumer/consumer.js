var in_stream = require('./producer.js');
in_stream.on('data',function(dataChunk){
	console.log(dataChunk.toString());
	//Set time delay

});
in_stream.on('end',function(){
	console.log('Done with reading');

});
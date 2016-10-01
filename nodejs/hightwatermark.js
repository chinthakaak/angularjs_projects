var fs = require('fs');
var stream = fs.createReadStream('hwm.txt',{highWaterMark: 3});

stream.on('data',function(dataChunk){
	console.log(dataChunk.toString());
	//Set time delay

});
stream.on('end',function(){
	console.log('Done with reading');

});
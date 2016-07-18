var fs = require('fs');
var stream = fs.createReadStream('package.json');

stream.on('data',function(dataChunk){
	console.log(dataChunk.toString());
	//Set time delay

});
stream.on('end',function(){
	console.log('Done with reading');

});
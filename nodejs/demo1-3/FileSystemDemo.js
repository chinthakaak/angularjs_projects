var fs = require('fs');
fs.readdir('.',function(err,files){
	if(err){
		console.log(err);
	}
	else
		console.log(files);
});
console.log('done');
fs.mkdir('Temp',function(){
	console.log('created dir');
});
//All properties of the file
fs.stat('package.json',function(err,stats){
	console.log('Is file?'+stats.isFile());
});
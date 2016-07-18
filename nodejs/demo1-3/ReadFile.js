var fs = require('fs');
/*fs.readFile('package.json','utf8',function(err,data){
	console.log(data);
});*/
var data = fs.readFileSync('package.json','utf8');
console.log(data);
console.log('done');
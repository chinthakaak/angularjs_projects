var fileSystem = require('fs');
fileSystem.readdir('.', function(err, files){
	if(err) {
		console.log(err);
	}
	else {
		console.log(files);
	}
});

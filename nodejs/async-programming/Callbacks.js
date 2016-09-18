
/**
 * In callnbacks evens are not involved.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	if (req.url = '/') {
		// json read
		fs.readFile('./titles.json', function(err, data){
			if (err) {
				console.error(err);
				res.end('Server Error');
			}
			console.log(data);
			console.log(data.toString());
			jsondata = JSON.parse(data.toString());
			console.log(jsondata);
			res.end();
		});
		
		// read html
		fs.readFile('./template.html', function(err, data){
			if(err) {
				console.log(err);
				res.end('Server Error');
			}
			
			var template = data.toString();
			var html = template.replace('%', jsondata.join('</li><li>'));
			res.writeHead(200,{'Content-Type':'text/html'});
			res.end(html);
		});
	}
});

server.listen(3000, function() {
	console.log('Server started');
});
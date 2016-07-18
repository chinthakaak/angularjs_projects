var http = require('http');
var server = http.createServer(handleRequests);
function handleRequests(request, response){
	
	/*if(request.method == 'GET'){
		
	}*/
	console.log('request is '+request.url);
	
	response.write('request is '+request.url);
	response.end();
}

server.listen(4000, function(){
console.log('console listening on 4000');
}
);
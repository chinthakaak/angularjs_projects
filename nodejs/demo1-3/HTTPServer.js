var http = require('http');
function handleRequests(request,response){
	if(request.method=='GET'){

	}
	console.log('Request is'+request.url);
	response.write('Request is'+request.url);
	response.end();
}
var server = http.createServer(handleRequests);

server.listen(4000,function(){
	console.log('server listening on 4000');
});

//Express 
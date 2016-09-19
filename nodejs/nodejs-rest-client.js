var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way 
client.get('http://vega-qa.cloudapp.net:8080/v1.0/trace', function (data, response) {
    // parsed response body as js object 
    var arr = JSON.parse(data)
    console.log(arr[10].responseBody);
    // raw response 
    console.log(response.statusCode);
});

// set content-type header and data as json in args parameter 
// var args = {
//     data: { test: "hello" },
//     headers: { "Content-Type": "application/json" }
// };
 
// client.post("http://remote.site/rest/xml/method", args, function (data, response) {
//     // parsed response body as js object 
//     console.log(data);
//     // raw response 
//     console.log(response);
// });
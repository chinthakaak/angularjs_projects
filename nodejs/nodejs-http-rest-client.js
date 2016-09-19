var http = require('http')
var options = {
  host: "vega-qa.cloudapp.net",
  port: 8080,
  path: '/v1.0/trace',
  method: 'GET'
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();
var os = require('os'); // inbuild module
console.log("Hello World" + os.type());

var greetObj = require('./Greet');
console.log(greetObj.greet());

var user=require('./user')
var kushan = new user('kushan','ka@k.com');
console.log()
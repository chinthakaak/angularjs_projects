var os = require('os'); //Inbuilt module
var fs = require('fs'); //Inbuilt module
var math = require('mathjs'); //NPM module
var greetObj = require('./Greet'); //Custom module
var user = require('./user');

var jones = new user('Jones','jones@gmail.com');
console.log(greetObj.greet());

console.log('Hello World to Node.js'+os.type());

console.log("Sum:"+math.chain(3).math.add(4).add(5));

console.log("Eval"+eval('34+(5*3))');
console.log("Log"+math.log(1000,10));

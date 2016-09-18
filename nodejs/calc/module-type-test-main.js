/**
 * http://usejsdoc.org/
 */
var calcul = require('./calculator.js');
console.log("exports.add test in a js file : "+calcul.add(2,1));

var cal2 = require('./calc-mod');
console.log("exports.add in a folder calc-mod with index.js : "+cal2.add(1,33));

var calc3 = require('./calc-moreops.js');
console.log('two exports '+ calc3.mul(1,3) + '  ' + calc3.add(3,1));

var calc4 = require('./calc-package-mod');
console.log('module inside a folder with package.json module.exports: ' + calc4.add1(1,3));
console.log('module inside a folder with package.json exports: ' + calc4.add2(2,3));
console.log('module inside a folder with package.json exports: ' + calc4.add3(20,3));
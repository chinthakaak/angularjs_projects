/**
 * What really gets exported
What ultimately gets exported in your application is module.exports. exports is set
up simply as a global reference to module.exports, which initially is defined as an
empty object that you can add properties to. So exports.myFunc is just shorthand
for module.exports.myFunc.
As a result, if exports is set to anything else, it breaks the reference between
module.exports and exports. Because module.exports is what really gets
exported, exports will no longer work as expected—it doesn’t reference module
.exports anymore. If you want to maintain that link, you can make module.exports
reference exports again as follows:
module.exports = exports = Currency;
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

var calc5 = require('./CalcObject.js');
console.log('module.exports with objects '+calc5.add(1,1));
console.log('module.exports with objects '+calc5.mul(6,10));
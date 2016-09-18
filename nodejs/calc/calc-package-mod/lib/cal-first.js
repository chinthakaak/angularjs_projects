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
var add = function(a, b){
	return a + b;
}

var mul = function(a, b) {
	return a*b;
}

module.exports.add1 = add
exports.add2 = add
module.exports.add3 = exports.add3 = add

//module.exports = exports = mul;
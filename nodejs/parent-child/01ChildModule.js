// exports is an object
// it can use to export varibles, functions and classes
var num = 10;
var addNum = function (value) {
    return num + value;
}

module.exports.num = num;
module.exports.addNum = addNum;

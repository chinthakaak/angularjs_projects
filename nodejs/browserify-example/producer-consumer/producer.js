var fs = require('fs');
var in_stream = fs.createReadStream('hwm.txt',{highWaterMark: 3});

module.exports = in_stream;
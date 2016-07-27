var user = require('./user-address').user;
var address = require('./user-address').address;

var us = new user('Ranil');
console.log(us.getName());

var ad = new address('Col 12')
console.log(ad.getAddress());

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var user = require('./model/user');
var app = new express();

mongoose.connect('mongodb://localhost:27017/user_db');

app.use(bodyParser.urlencoded()); //How to parse the body data
//Default route for my application

var router = express.Router();
router.route('/users')
.get(function(request,response){
	user.find({},function(err,allUsers){
		//Callback 
		if(err){
			response.send(err);
		}
		else
			response.json(allUsers);
});
}).
post(function(request,response,next){
	//Here you will process the form data
	console.log('Got a post req');
	var newuser = new user();
	newuser.name = request.body.name; 
	newuser.address = request.body.address; 
	//allUsers.push(newuser);
	newuser.save(function(err){
		if(err){
			response.send(err);
		}
	   response.redirect('/');	
	});

	
});


var server = app.listen(4000,function(){
	console.log('Server listening on 4000');
});

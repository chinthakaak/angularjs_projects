var express = require('express');
var mongoose = require('mongoose');
var ejs = require('ejs'); //Templating engine which is used to render ejs file
var bodyParser = require('body-parser');
var user = require('./model/user');
var app = new express();
//var allUsers = [{'name':'Joe','address':'Pune'},{'name':'Ankita','address':'Goa'}];
mongoose.connect('mongodb://localhost:27017/user_db');

//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.engine('html', ejs.renderFile);
app.use(bodyParser.urlencoded()); //How to parse the body data
//Default route for my application
app.get('/',function(request,response){
	//Render the index.html
	//Query the db here
	user.find({},function(err,allUsers){
		//Callback 
		if(err){
			response.send(err);
		}
		response.render('index.ejs',{name:'Jones',users:allUsers});
	});
});
app.get('/contacts',function(request,response){
	response.render('contacts.html');
});
app.get('/addUser',function(request,response){
	response.render('addUser.ejs');
});
app.post('/addUser',function(request,response,next){
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
//404 errors
app.use(function(request,response,next){
	response.status(404).send("Page cannot be found");
});
//500 errors
app.use(function(err,request,response,next){
	response.status(501).send("Internal Server Error");
});

var server = app.listen(4000,function(){
	console.log('Server listening on 4000');
});
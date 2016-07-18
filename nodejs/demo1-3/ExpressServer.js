var express = require('express');
var ejs = require('ejs'); //Templating engine which is used to render ejs file
var app = new express();

//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.engine('html', ejs.renderFile);

//Default route for my application
app.get('/',function(request,response){
	//Render the index.html
	response.render('index.ejs',{name:'Jones'});
});
app.get('/contacts',function(request,response){
	response.render('contacts.html');
});
app.get('/users',function(){

});
app.post('/users',function(){
	//Here you will process the form data
});
var server = app.listen(4000,function(){
	console.log('Server listening on 4000');
});
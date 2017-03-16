// include the path package to get the correct file path for our html
var path = require('path');
var express = require("express");


// ROUTING
module.exports = function(app){
	app.use(express.static(path.join(__dirname+'/../public')));
	app.use(express.static(path.join(__dirname+'/../public/js')));
	app.use(express.static(path.join(__dirname+'/../public/css')));
	app.use(express.static(path.join(__dirname+'/../public/images')));
	// HTML GET Requests
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.get("/",function(req, res){
		res.sendFile(path.join(__dirname+'/../public/home.html'));
	});
}
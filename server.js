var express = require('express');
var bodyparser = require('body-parser');

var connection = require('./DBconnection');
var routes = require('./routes');

var app = express();

app.use(bodyparser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyparser.json());

app.use('/api',routes);

var server = app.listen(3000, function() {
	
	//var host = server.address().address;
	var port = server.address().port;
  	//console.log("Server listening on " + host + ":"  + port);
	console.log("Server listening on port %s",  port);
});

module.exports = app;

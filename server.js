// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
// var athenahealthapi = require('athenahealthapi')

// configuration ===========================================
    
// config files
var db = require('./db');

// set our port
var port = process.env.PORT || 8080; 

    // var athenahealthapi = require('/js/athenahealthapi')
    // // var events = require('events')
    // var key = 'cjwzdpy9excyntnnt4baqd5z'
    // var secret = 'ytD5zEadn5HC2ZT'
    // var version = 'preview1'
    // var practiceid = 195900
    // // var departments = []
    // // var department_id = 0
    // var api = new athenahealthapi.Connection(version, key, secret, practiceid)
    // api.status.on('ready', main)
    // api.status.on('error', function(error) {
    // 	console.log(error)
    // })
// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url); 


// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/client')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;                         

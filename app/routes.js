// app/routes.js

// grab the provider model we just created
var Provider = require('./provider');
var express = require('express');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes
        var router = express.Router();
        router.use(function(req, res, next) {
            // do logging
            console.log('Something is happening.');
            next(); // make sure we go to the next routes and don't stop here
        });
        
        router.get('/', function(req, res) {
            res.json({ message: 'hooray! welcome to our api!' });   
        });
        
        router.route('/providers')
        
            // create a car (accessed at POST http://localhost:8080/api/cars)
            .post(function(req, res) {
                Provider.findOneAndUpdate({provider_id:req.body.provider_id}, req.body, {upsert:true}, function(err,car){
                    if (err)
                        res.send(err);
                    res.json({message: 'Provider saved'});
                });
            })
        
            // get all the cars (accessed at GET http://localhost:8080/api/cars)
            .get(function(req, res) {
                Provider.find(function(err, providers) {
                    if (err)
                        res.send(err);
        
                    res.json(providers);
                });
            });
            
        app.use('/api', router);

        // sample api route
        // app.get('/api/providers', function(req, res) {
        //     // use mongoose to get all providers in the database
        //     Provider.find(function(err, providers) {

        //         // if there is an error retrieving, send the error. 
        //                         // nothing after res.send(err) will execute
        //         if (err)
        //             res.send(err);

        //         res.json(providers); // return all providers in JSON format
        //     });
        // });

        // // route to handle creating goes here (app.post)
        // // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./client/views/index.html'); // load our public/index.html file
        });

    };

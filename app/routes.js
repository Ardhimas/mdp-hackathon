// app/routes.js

// grab the provider model we just created
var Provider = require('./provider');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/providers', function(req, res) {
            // use mongoose to get all providers in the database
            Provider.find(function(err, providers) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(providers); // return all providers in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./client/views/index.html'); // load our public/index.html file
        });

    };

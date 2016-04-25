// angular.module('sampleApp', ['ngRoute', 'appRoutes', 'HomeCtrl', 'ProviderCtrl', 
//     'SchedulerCtrl', 'SessionCtrl', 'ProviderService', 'SchedulerService', 'SessionService']);

require('../libs/jquery/dist/jquery.min');
require('../libs/angular/angular.min');
require('../libs/angular-route/angular-route.min');
require('../libs/angular-ui-select/dist/select.js');
require('../libs/angular-sanitize/angular-sanitize.js');

var homeCtrl = require('./controllers/HomeCtrl');
var providerCtrl = require('./controllers/ProviderCtrl');
var schedulerCtrl = require('./controllers/SchedulerCtrl');
var sessionCtrl = require('./controllers/SessionCtrl');
var providerService = require('./services/ProviderService');
var schedulerService = require('./services/SchedulerService');
var sessionService = require('./services/SessionService');
// var athena = require('./athenahealthapi');

var app = angular.module('mdpApp', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        // scheduler page that will use the SchedulerController
        .when('/scheduler', {
            templateUrl: 'views/scheduler.html',
            controller: 'SchedulerController'
        })

        // scheduler page that will use the SchedulerController
        .when('/providers', {
            templateUrl: 'views/providers.html',
            controller: 'ProviderController'
        })

        // scheduler page that will use the SchedulerController
        .when('/session', {
            templateUrl: 'views/session.html',
            controller: 'SessionController'
        })
        .otherwise(
        {
          redirectTo: '/home'
        });
        
    $locationProvider.html5Mode(true);
}]);


app.factory('Provider', ['$http', providerService]);
app.factory('Scheduler', ['$http', schedulerService]);
app.factory('Session', ['$http', sessionService]);

app.controller('HomeController', ['$scope', homeCtrl]);
app.controller('ProviderController', ['$scope', 'Provider', providerCtrl]);
app.controller('SchedulerController', ['$scope', 'Scheduler', schedulerCtrl]);
app.controller('SessionController', ['$scope',  'Session', sessionCtrl]);
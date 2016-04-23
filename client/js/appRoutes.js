// client/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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
        });

    $locationProvider.html5Mode(true);

}]);
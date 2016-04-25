// // client/js/controllers/HomeCtrl.js
// angular.module('HomeCtrl', []).controller('HomeController', function($scope) {

//     $scope.tagline = 'Speedy Sessions';   

// });

module.exports = function($scope) {
    // return function($scope) {
        $scope.tagline = 'Speedy Tagline';   

    // };
};

//browserify athenahealthapi.js controllers/*.js services/*.js app.js -o bundle.js
// client/js/controllers/SessionCtrl.js

angular.module('SessionCtrl', []).controller('SessionController', function($scope, Session, $rootScope, $location) {
    $scope.tagline = 'Session page!';
    //$scope.list = SessionService.getPatients()
    
    var info = {firstname: "Neville"}
    var returnData = function(input){return input}
    $scope.list = info.firstname; 
    //Session.getPatients(info, someFunc)
    
    $rootScope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
};
    
});

// client/js/controllers/SessionCtrl.js

// angular.module('SessionCtrl', []).controller('SessionController', function($scope, Session, $rootScope, $location) {
module.exports = function($scope, Session) {
    $scope.tagline = 'Session page!';
    //$scope.list = SessionService.getPatients()
    
    var info = {firstname:'Ronnie', lastname:'Donnie', anyphone:'5128882888', dob:'11/24/1993'}
    var returnData = function(input){$scope.patient = input}
   // $scope.list = info.firstname; 
    
    // $scope.list = Session.getPatientBestMatch(info, returnData)
    
    Session.getAppointment(3782, returnData)
    $scope.patients = info

    // module.exports.getPatientBestMatch(info, returnData)
    //print patient names according to input data
    //$scope.name = Session.getPatientBestMatch(info, returnData)
}// });

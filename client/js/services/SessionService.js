// client/js/services/SessionService.js
angular.module('SessionService', []).factory('Session', ['$http', function($http) {

    return {
        // call to get all schedulers
        get : function() {
            return $http.get('/api/schedulers');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new scheduler
        create : function(schedulerData) {
            return $http.post('/api/schedulers', schedulerData);
        },

        // call to DELETE a scheduler
        delete : function(id) {
            return $http.delete('/api/schedulers/' + id);
        }
    }       

}]);
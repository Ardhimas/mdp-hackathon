// client/js/services/ProviderService.js
angular.module('ProviderService', []).factory('Provider', ['$http', function($http) {
    
    return {
        // call to get all providers
        get : function() {
            return $http.get('/api');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new provider
        create : function(providerData) {
            return $http.post('/api/providers', providerData);
        },

        // call to DELETE a provider
        delete : function(id) {
            return $http.delete('/api/providers/' + id);
        }
    }       

}]);
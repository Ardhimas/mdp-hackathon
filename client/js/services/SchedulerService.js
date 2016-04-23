// client/js/services/SchedulerService.js
angular.module('SchedulerService', []).factory('Scheduler', ['$http', function($http) {
    /**
     * Setting up connection to API
     */
    var athenahealthapi = require('/js/athenahealthapi')
    var events = require('events')
    var key = 'cjwzdpy9excyntnnt4baqd5z'
    var secret = 'ytD5zEadn5HC2ZT'
    var version = 'preview1'
    var practiceid = 195900
    var departments = []
    var department_id = 0
    var api = new athenahealthapi.Connection(version, key, secret, practiceid)
    api.status.on('ready', main)
    api.status.on('error', function(error) {
    	console.log(error)
    })
    
    return {
        // call to get all Departments
        getDepartments : function() {
            api.GET('/departments', {
            params: {
              providerList: false,
              showalldepartments: false 
            }
        }).on('done', function(response) {
        		department_id = response['departments'][0].departmentid
        		console.log(department_id)
        	}).on('error', log_error)
        },
        
        // call to get all Provider
        getDepartments : function() {
            return $http.get('/departments');
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
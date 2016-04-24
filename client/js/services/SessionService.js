// client/js/services/SessionService.js
// patient sign in and log provider data for average wait/visit time
/*global angular, api, events*/
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
        },
        //patient info MUST HAVE: lastname, firstname, dob, anyphone
        getPatientBestMatch: function (api, patient_info) {
	       api.GET('/patients/bestmatch', {
	         params: patient_info
	       }).on('done', function(response){
	 	     var patientbestmatch = response[0]
		    // patientlist.forEach(function(item){
		    //   console.log(item.firstname);	
		    // });
		    //return 
		   return patientbestmatch
	       }).on('error', function(error){console.log(error)});
        },
        /*get first appointment*/
        getAppointment: function(patient_id, callback) {
	      var query = {
		    showcancelled: false,
		    showpast: false
	      }
	      api.GET('/patients/'+ patient_id +'/appointments', {
	       params: query	
	      }).on('done', function(response){
		    var appt_list = response['appointments']
		    var appointment = appt_list[0]
		    return callback(appointment)
	      })
        },
        patientSignIn: function(appointment_id, type) {
   	     //get appointment time
         //compare to current time, calculate and then add to wait time
         //type can be 'visit_start' or 'visit_end'
         var signal = new events.EventEmitter
	     var curr_time = new Date()
	     var appt_time
	     api.GET('/appointments/'+ appointment_id, {
	        params: { showcopay: false }
	     }).on('done', function(response){
	       var provider = response[0].providerid
	       //query mongodb for provider id. if not exist, then
	       if(true) {
	       	 api.GET('/providers/' + provider).on('done', function(response){
	            var name = response[0].firstname + ' ' + response[0].lastname
	            //create mongodb data here
	            signal.emit('provider', name)
	          });
	       }
		   
		   signal.on('provider', function(name) {
		   	 appt_time = new Date(response[0].date + " " + response[0].starttime)
		     var diff = (curr_time.getTime() - appt_time.getTime()) / 1000.0 / 60.0
		     if (type == 'visit_start') {
		       //add to wait_time in schema  
		     } else if (type == 'visit_end'){
		       //add to visit_time in schema     
		     } else {
		       //do nothing
		     }
		     console.log(diff + ' ' + name)
		   })
       	 })
        }       
    }
}]);
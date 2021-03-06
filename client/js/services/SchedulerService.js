
// client/js/services/SchedulerService.js
// angular.module('SchedulerService', []).factory('Scheduler', ['$http', function($http) {
//     /**
//      * Setting up connection to API
//     //  */
//     // var athenahealthapi = require('./js/athenahealthapi')
//     // // var events = require('events')
//     var key = 'cjwzdpy9excyntnnt4baqd5z'
//     var secret = 'ytD5zEadn5HC2ZT'
//     var version = 'preview1'
//     var practiceid = 195900
//     var api = athenahealthapi.Connection(version, key, secret, practiceid)
//     api.status.on('ready', main)
//     api.status.on('error', function(error) {
//     	console.log(error)
//     })
// client/js/services/SchedulerService.js
var Athena = require('../athenahealthapi');

module.exports = function($http){
// angular.module('SchedulerService', []).factory('Scheduler', ['$http', function($http) {
    /**
     * Setting up connection to API
    //  */
    // var athenahealthapi = require('./js/athenahealthapi')
    // // var events = require('events')
    
    // return function($http,$Athena){
    function log_error(error) {
    	console.log(error)
    	console.log(error.cause)
    }  
    var key = 'ywbfpyjnsuef58wdxzpwtfn7'
    var secret = 'hqmEMUJgRZUTs8r'
    var version = 'preview1'
    var practiceid = 195900
    var departmentsList = []
    var department_id = 0
    var api = new Athena.Connection(version, key, secret, practiceid)
    // api.status.on('ready', main)
    // api.status.on('error', function(error) {
    // 	console.log(error)
    // })    
    return {
        // call to get all Departments
        getDepartments : function(callback) {
            console.log("before get departments")
            // api.GET('/departments', {
            //     params: {
            //       providerList: false,
            //       showalldepartments: false
            //     }
            // }).on('done',function(response) {
            //     departmentsList = response['departments']
            // 	var departments = []
            // 	for (var i = 0; i < departmentsList.length; ++i) {
            // 	    var department = { 'name': departmentsList[i]['patientdepartmentname'],
            // 	                       'departmentId':  departmentsList[i]['departmentid'] }
            // 	    departments.push(department)
            // 	}
            // 	console.log(departments)
            // 	callback(departments)
            // }).on('error', log_error)
            var promises = [];
            promises.push(api.GET('/departments', {
                params: {
                  providerList: false,
                  showalldepartments: false
                }
            }))
            Promise.all(promises).then(function(data){
                departmentsList = data['departments'];
                var departments = []
            	for (var i = 0; i < departmentsList.length; ++i) {
            	    var department = { 'name': departmentsList[i]['patientdepartmentname'],
            	                       'departmentId':  departmentsList[i]['departmentid'] }
            	    departments.push(department)
            	}
            	callback(departments)
            })
        },
        
        // getDepartmentId : function(callback, departmentname) {
        //   api.GET('/departments', {
        //         params: {
        //           providerList: false,
        //           showalldepartments: false
        //         }
        //     }).on('done', function(response) {
        //         departments = response['departments']
        //         for (i = 0; i < departments.length; ++i) {
        //             if (departments[i]['patientdepartmentname'] == departmentname) {
        //                 callback(departments[i]['departmentid'])
        //             }
        //             else {
        //                 console.log("Failed")
        //             }
        //         }
        //     }).on('error', log_error)
        // },
        
        // call to get all Provider
        getProviders : function(callback, provideTypeInput, showAllProviderIdsInput) {
            var sapi = typeof(showAllProviderIdsInput) !== 'undefined' ?  showAllProviderIdsInput : ''
            var pti = typeof(provideTypeInput) !== 'undefined' ?  provideTypeInput : ''
            console.log("before call getProviders")
            api.GET('/providers', {
                params: {
                    provideType: pti,
                    showAllProviderIds: sapi
                }
            }).on('done', function(response) {
                providers = response['providers']
                var providernames = []
                for (i = 0; i < providers.length; ++i) {
                    var provider = {firstname: providers[i]['firstname'], 
                                    lastname: providers[i]['lastname'], 
                                    specialty: providers[i]['specialty'], 
                                    providerId: providers[i]['providerid'] }
                    providernames.push(provider)
                } 
                callback(providernames)
            }).on('error', log_error)
        },
        
        // getProviderId : function(callback, provider) {
        //     api.GET('/providers', {
        //         params: {
        //             provideType: '',
        //             showAllProviderIds: ''
        //         }
        //     }).on('done', function(response) {
        //         providers = response['providers']
        //         for (i = 0; i < providers.length; ++i) {
        //             if (provider['firstname'] == providers[i]['firstname'] &&
        //                 provider['lastname']  == providers[i]['lastname']  &&
        //                 provider['specialty'] == providers[i]['specialty']) {
        //                 return callback(providers[i]['providerid'])   
        //             }
        //         }
        //     }).on('error', log_error)
        // },
        
        getReasons : function(callback, departmentId, providerId) {
            api.GET('/patientappointmentreasons', {
                params: {
                    departmentid: departmentId,
                    providerid: providerId
                }
            }).on('done', function(response) {
                reasonsList = response['patientappointmentreasons']
                reasons = []
                for (i = 0; i < reasonsList.length; ++i) {
                    var reason = {  description: reasonsList[i]['description'], 
                                    reasonId: reasonsList[i]['reasonid'] }
                    reasons.push(reason)
                }
                callback(reasons)
            }).on('error', log_error)
        },
        
        // getReasonId : function(callback, departmentId, providerId, reason) {
        //     api.GET('/patientappointmentreasons', {
        //         params: {
        //             departmentid: departmentId,
        //             providerid: providerId
        //         }
        //     }).on('done', function(response) {
        //         reasonsList = response['patientappointmentreasons']
        //         reasons = []
        //         for (i = 0; i < reasonsList.length; ++i) {
        //             if (reason == reasonsList[i]['description']) {
        //                 return callback(reasonsList[i]['reasonid'])
        //             }
        //         }
        //         console.log('failed')
        //     }).on('error', log_error)
        // },
        
        getAppointments : function(callback, departmentId, providerId, reasonId) {
            api.GET('/appointments/open', {
                params: {
                    departmentid: departmentId,
                    ignoreschedulablepermission: 'false',
                    providerid: providerId,
                    reasonid: reasonId,
                    showfrozenslots: 'false'
                }
            }).on('done', function(response) {
                appointmentList = response['appointments']
                appointments = []
                var length = (appointmentList.length > 20) ? 20 : appointmentList.length
                for (i = 0; i < length; ++i) {
                    var appointment = { date: appointmentList[i]['date'],
                                        time: appointmentList[i]['starttime'],
                                        duration: appointmentList[i]['duration'],
                                        appointmentId: appointmentList[i]['appointmentid']}
                    appointments.push(appointment)
                }
                callback(appointments)
            }).on('error', log_error)
        },
        
        createNewPatient : function(callback, patient) {
            api.POST('/patients', {
                params: patient
            }).on('done', function(response) {
                console.log("Saved Patient")
            }).on('error', log_error)
        },
        
        getPatientId : function(callback, patient) {
            api.GET('/patients/bestmatch', {
                params: patient
            }).on('done', function(response) {
                patientInfo = response[0]
                callback(patientInfo['patientid'])
            }).on('error', log_error)
        },
        
        bookAppointment: function(callback, patientId, reasonId, appointmentId) {
            api.PUT('/appointments/' + appointmentId, {
                params: {
                    patientid: patientId,
                    reasonid: reasonId,
                    ignoreschedulablepermission: 'false'
                }
            }).on('done', function(response) {
                console.log('Booked an appointment')
            }).on('error', log_error)
        },

        log_error : function(error) {
        	console.log(error)
        	console.log(error.cause)
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
}
// }]);
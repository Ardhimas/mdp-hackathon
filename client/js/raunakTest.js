var athenahealthapi = require('./athenahealthapi')
var events = require('events')
// var key = 'uqjd9nqbwajqv3826rraw2db'
var key = 'cjwzdpy9excyntnnt4baqd5z'
// var secret = 'DRa24besVaJukaZ'
var secret = 'ytD5zEadn5HC2ZT'
var version = 'preview1'
var practiceid = 195900
var departments = [];
var department_id = 0;
var api = new athenahealthapi.Connection(version, key, secret, practiceid)
// api.getToken()
api.status.on('ready', main)
api.status.on('error', function(error) {
	console.log(error)
})

// console.log('made it here')
function getDepartments(callback) {
    api.GET('/departments', {
        params: {
          providerList: false,
          showalldepartments: false
        }
    }).on('done', function(response) {
        departments = response['departments']
    	var departmentnames = []
    	for (i = 0; i < departments.length; ++i) {
    	    // console.log(departments[i]['patientdepartmentname'])
    	    departmentnames.push(departments[i]['patientdepartmentname'])
    	}
    	return callback(departmentnames)
    }).on('error', log_error)
}

function getDepartmentId(callback, departmentname) {
   api.GET('/departments', {
        params: {
          providerList: false,
          showalldepartments: false
        }
    }).on('done', function(response) {
        departments = response['departments']
        for (i = 0; i < departments.length; ++i) {
            if (departments[i]['patientdepartmentname'] == departmentname) {
                return callback(departments[i]['departmentid'])
            }
            else {
                console.log("Failed")
            }
        }
    }).on('error', log_error)
}

function getProviders(callback, provideTypeInput, showAllProviderIdsInput) {
    var sapi = typeof(showAllProviderIdsInput) !== 'undefined' ?  showAllProviderIdsInput : ''
    var pti = typeof(provideTypeInput) !== 'undefined' ?  provideTypeInput : ''
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
                            specialty: providers[i]['specialty'], 
                            lastname: providers[i]['lastname']}
            providernames.push(provider)
        } 
        return callback(providernames)
    }).on('error', log_error)
}

function getProviderId(callback, provider) {
    api.GET('/providers', {
        params: {
            provideType: '',
            showAllProviderIds: ''
        }
    }).on('done', function(response) {
        providers = response['providers']
        for (i = 0; i < providers.length; ++i) {
            if (provider['firstname'] == providers[i]['firstname'] &&
                provider['lastname']  == providers[i]['lastname']  &&
                provider['specialty'] == providers[i]['specialty']) {
                return callback(providers[i]['providerid'])   
            }
        }
    }).on('error', log_error)
}

function getReasons(callback, departmentId, providerId) {
    api.GET('/patientappointmentreasons', {
        params: {
            departmentid: departmentId,
            providerid: providerId
        }
    }).on('done', function(response) {
        reasonsList = response['patientappointmentreasons']
        reasons = []
        for (i = 0; i < reasonsList.length; ++i) {
            reasons.push(reasonsList[i]['description'])
        }
        return callback(reasons)
    }).on('error', log_error)
}

function getReasonId(callback, departmentId, providerId, reason) {
    api.GET('/patientappointmentreasons', {
        params: {
            departmentid: departmentId,
            providerid: providerId
        }
    }).on('done', function(response) {
        reasonsList = response['patientappointmentreasons']
        reasons = []
        for (i = 0; i < reasonsList.length; ++i) {
            if (reason == reasonsList[i]['description']) {
                return callback(reasonsList[i]['reasonid'])
            }
        }
        console.log('failed')
    }).on('error', log_error)
}

function getAppointments(callback, departmentId, providerId, reasonId) {
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
        return callback(appointments)
    }).on('error', log_error)
}

function createNewPatient(callback, patient) {
    api.POST('/patients', {
        params: patient
    }).on('done', function(response) {
        console.log('Created New Patient')
    }).on('error', log_error)
}

function getPatientId(callback, patient) {
    //console.log(patient)
    api.GET('/patients/bestmatch', {
        params: patient
    }).on('done', function(response) {
        patientInfo = response[0]
        callback(patientInfo['patientid'])
    }).on('error', log_error)
}

function bookAppointment(callback, patientId, reasonId, appointmentId) {
    api.PUT('/appointments/' + appointmentId, {
        params: {
            patientid: patientId,
            reasonid: reasonId,
            ignoreschedulablepermission: 'false'
        }
    }).on('done', function(response) {
        console.log('Booked an appointment')
    }).on('error', log_error)
}

// function createPatient(){
// 		var patient_info = {
// 			lastname: 'Foo',
// 			firstname: 'Jason',
// 			address1: '123 Any Street',
// 			city: 'Cambridge',
// 			countrycode3166: 'US',
// 			departmentid: 1,
// 			dob: '6/18/1987',
// 			language6392code: 'declined',
// 			maritalstatus: 'S',
// 			race: 'declined',
// 			sex: 'M',
// 			ssn: '*****1234',
// 			zip: '02139',
// 		}

// 		api.POST('/patients', {
// 			params: patient_info,
// 		}).on('done', function(response) {
// 			var patient = response[0]
// 			var new_patient_id = patient['patientid']
// 			console.log('New patient id:')
// 			console.log(new_patient_id)
// 			console.log()
// 			//signal.emit('patient', appt, patient)
// 		}).on('error', log_error)	
// }
function log_error(error) {
	console.log(error)
	console.log(error.cause)
}

// getDepartments()
// api.GET('/appointments/open', {
//     params: {
//         appointmenttypeid:82,
//         departmentid: 1,
//         //end_date: "12/12/2016",
//         ignoreschedulablepermission: false,
//         providerid: 71
//     }
// }).on('done', function(response) {
//   var appt_list = response['appointments']
//   for (var i = 0; i < appt_list.length; i++) {
//       console.log(appt_list[i].date + "-" + appt_list[i].starttime + "\n")
//   }  
// }).on('error', log_error)

function main() {
    var returnArg
    var tester = function(input) {
        console.log(input)
        return input
    }
    //getDepartments(tester)
    //getProviders(tester)
    //getDepartmentId(tester, 'Rome Office')
    //var provider = {firstname:"Clelia", lastname:"Duncan", specialty:"Family Medicine"};
    //getProviderId(tester, provider)
    //getReasons(tester, 1, 71)
    //getReasonId(tester, 1, 71, 'I need to have blood drawn or undergo other tests.')
    //getAppointments(tester, 1, 71, 565)
    var patient = { dob: '11/24/1993', firstname: 'Ronald', lastname: 'Donnie', 
                    mobilephone: '512 888 2888', departmentid: 1 }
    //getPatientId(tester, patient)
    //createNewPatient(tester, patient)
    bookAppointment(tester, 22616, 565, 664617)
}
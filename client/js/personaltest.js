var athenahealthapi = require('./athenahealthapi')
var events = require('events')
//var key = 'h45cdhgu5f79vmjd92zx7xw4'
var key = 'cjwzdpy9excyntnnt4baqd5z'
//var secret = 'KwV5ff6CdhWTSTT'
var secret = 'ytD5zEadn5HC2ZT'
var version = 'preview1'
var practiceid = 195900
var departments = []
var department_id = 0

var api = new athenahealthapi.Connection(version, key, secret, practiceid)
// api.getToken()
api.status.on('ready', main)
api.status.on('error', function(error) {
	console.log(error)
	
})

//console.log('made it here')
function getDepartments(){
    api.GET('/departments', {
    params: {
      providerList: false,
      showalldepartments: false 
    }
}).on('done', function(response) {
		department_id = response['departments'][0].departmentid
		//console.log('Open appointment:')
		console.log(department_id)
		//console.log()
		//signal.emit('appt', appt)
	}).on('error', log_error)
}

function getProviders() {
	api.GET('/providers',{params:{
		showallproviderids: false
	}}).on('done', function(response){
		// response['providers'].forEach(function(val){
		// 	console.log(val.firstname + " " + val.lastname)
		// })
		
	})
	
}
function createPatient(){
		var patient_info = {
			lastname: 'Foo',
			firstname: 'Jason',
			address1: '123 Any Street',
			city: 'Cambridge',
			countrycode3166: 'US',
			departmentid: 1,
			dob: '6/18/1987',
			language6392code: 'declined',
			maritalstatus: 'S',
			race: 'declined',
			sex: 'M',
			ssn: '*****1234',
			zip: '02139',
		}

		api.POST('/patients', {
			params: patient_info,
		}).on('done', function(response) {
			var patient = response[0]
			var new_patient_id = patient['patientid']
			console.log('New patient id:')
			console.log(new_patient_id)
			console.log()
			//signal.emit('patient', appt, patient)
		}).on('error', log_error)	
}

function getPatient(patient_info) {
	api.GET('/patients/bestmatch', {
	  params: patient_info
	}).on('done', function(response){
		var patientbestmatch = response[0]
		// patientlist.forEach(function(item){
		//   console.log(item.firstname);	
		// });
		//return 
		console.log(patientbestmatch)
	}).on('error', log_error);
}
/*get first appointment*/
function getAppointment(patient_id, callback) {
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
}
//663598
        function patientSignIn(appointment_id, type) {
   	     //get appointment time
         //compare to current time, calculate and then add to wait time
         //type can be 'visit_start' or 'visit_end'
         var signal = new events.EventEmitter
	     var curr_time = new Date('4/24/2016 12:30')
	     var appt_time
	     api.GET('/appointments/'+ appointment_id, {
	        params: { showcopay: false }
	     }).on('done', function(response){
	       var provider = response[0].providerid
	       //query mongodb for provider id. if not exist, then
	       if(true) {
	       	 api.GET('/providers/' + provider, {}).on('done', function(response){
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
           
// patientSignIn(663598, 'visit_start')
function getParticularProvider(provider){
	api.GET('/providers/' + provider).on('done', function(response){
	            var name = response[0].firstname + ' ' + response[0].lastname
	            //create mongodb data here
	            // signal.emit('provider', name)
	            console.log(name)
	});
}


//var info = {firstname:'Ronnie', lastname:'Donnie', anyphone:'5128882888', dob:'11/24/1993'}
//getPatient(info)
//getAppointments(3782)
getParticularProvider(71)

function log_error(error) {
	console.log(error)
	console.log(error.cause)
}
// var info = {firstname: "Neville", lastname:"Rivera"}
// getPatients(info)
// getDepartments()
// getProviders()
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
    
}
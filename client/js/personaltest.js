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
		response['providers'].forEach(function(val){
			console.log(val.firstname + " " + val.lastname)
		})
	
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
function log_error(error) {
	console.log(error)
	console.log(error.cause)
}

getDepartments()
getProviders()
api.GET('/appointments/open', {
    params: {
        appointmenttypeid:82,
        departmentid: 1,
        //end_date: "12/12/2016",
        ignoreschedulablepermission: false,
        providerid: 71
    }
}).on('done', function(response) {
  var appt_list = response['appointments']
  for (var i = 0; i < appt_list.length; i++) {
      console.log(appt_list[i].date + "-" + appt_list[i].starttime + "\n")
  }  
}).on('error', log_error)

function main() {
    
}
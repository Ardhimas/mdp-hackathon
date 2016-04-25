// client/js/controllers/SchedulerCtrl.js
// angular.module('SchedulerCtrl', []).controller('SchedulerController', function($scope, Scheduler) {

//     $scope.tagline = 'Scheduler page!';
    
// });

module.exports = function($scope ,Scheduler) {
    // var saveDepartments = function(data) {
    //     $scope.deptList = data;
    //     $scope.$apply;
    //     console.log("helllo")
    //     console.log($scope.deptList)
    // }
    // var saveProviders = function(data) {
    //     $scope.providerList = data
    //     console.log($scope.providerList)
    // }
    // var saveReasons = function(data) {
    //     $scope.reasonList = data
    //     console.log($scope.reasonList)
    // }
    $scope.dept = {};
    $scope.deptList = [{
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "GA",
        "portalurl": "1959-1-practice-home-url",
        "city": "CLAXTON",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "latitude": "34.25597",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "1",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "longitude": "-85.17026",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "Rome Office",
        "name": "MAIN ST (HUB)",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 916-7897",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "30417",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "GA",
        "portalurl": "1959-1-practice-home-url",
        "city": "THOMSON",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "latitude": "34.1649",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "21",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "longitude": "-84.79669",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "Cartersville Office",
        "name": "BLUE HILL (HUB)",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 225-6052",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "30824-1111",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "2",
        "singleappointmentcontractmax": "3000",
        "state": "MA",
        "portalurl": "1959-21-practice-home-url",
        "city": "DANVERS",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "providergroupname": "Family Specialists",
        "doesnotobservedst": "false",
        "departmentid": "62",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "Blackstone patient-facing name (athenaNet)",
        "name": "NORTH CENTRAL (SPOKE)",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 314-0397",
        "zip": "01923",
        "communicatorbrandid": "21"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "CO",
        "portalurl": "1959-1-practice-home-url",
        "city": "PAONIA",
        "placeofservicefacility": "true",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "102",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "22",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "Cardiology Consults",
        "name": "ST FRANCIS HOSP -IN PT",
        "placeofservicetypename": "ON CAMPUS-OUTPATIENT HOSPITAL",
        "phone": "(555) 063-8553",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "81428",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "2",
        "singleappointmentcontractmax": "3000",
        "state": "CT",
        "portalurl": "1959-21-practice-home-url",
        "city": "VERNON ROCKVILLE",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "providergroupname": "Family Specialists",
        "doesnotobservedst": "false",
        "departmentid": "142",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "LANGLEY HOSPITAL-INPT",
        "name": "LANGLEY HOSPITAL-INPT",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 625-9608",
        "zip": "06066",
        "communicatorbrandid": "21"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "ME",
        "portalurl": "1959-1-practice-home-url",
        "city": "NORTH YARMOUTH",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "latitude": "44.41919",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "145",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "longitude": "-69.02124",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "Belfast Primary Care",
        "name": "CENTRAL CITY INPT",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 482-2453",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "04097",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "NY",
        "portalurl": "1959-1-practice-home-url",
        "city": "NEW YORK",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "latitude": "44.27192",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "148",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "longitude": "-69.37563",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "Portal Test",
        "name": "CENTRAL CITY SURGERY",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 759-3337",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "10199",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "ME",
        "portalurl": "1959-1-practice-home-url",
        "city": "BAR MILLS",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "latitude": "44.41919",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "150",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "longitude": "-69.02124",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "7 Hills' & Co. Department",
        "name": "ST FRANCIS SURGERY",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 829-4068",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "04004",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "MA",
        "portalurl": "1959-1-practice-home-url",
        "city": "BOSTON",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "latitude": "33.12390285",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "157",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "longitude": "-84.29847983",
        "clinicals": "ON",
        "timezone": -4,
        "patientdepartmentname": "CommOpsDevTest",
        "name": "CHERRY STREET",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 940-9531",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "02106",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "1",
        "singleappointmentcontractmax": "3000",
        "state": "NY",
        "portalurl": "1959-1-practice-home-url",
        "city": "BALLSTON SPA",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "providergroupname": "Downtown Health Group",
        "doesnotobservedst": "false",
        "departmentid": "162",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "clinicals": "OFF",
        "timezone": -4,
        "patientdepartmentname": "Main Office",
        "name": "MERCY HOSPITAL",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 946-3582",
        "ecommercecreditcardtypes": ["AX", "DS", "MC", "VI"],
        "zip": "12020",
        "communicatorbrandid": "1"
    }, {
        "creditcardtypes": ["AX", "DS", "MC", "VI"],
        "medicationhistoryconsent": "false",
        "timezoneoffset": -5,
        "providergroupid": "2",
        "singleappointmentcontractmax": "3000",
        "state": "ME",
        "portalurl": "1959-21-practice-home-url",
        "city": "ABBOT",
        "placeofservicefacility": "false",
        "servicedepartment": "true",
        "oneyearcontractmax": "1500",
        "providergroupname": "Family Specialists",
        "doesnotobservedst": "false",
        "departmentid": "164",
        "address": "8762 STONERIDGE CT",
        "placeofservicetypeid": "11",
        "clinicals": "OFF",
        "timezone": -4,
        "patientdepartmentname": "WEST HILL HOSPITAL",
        "name": "WEST HILL HOSPITAL",
        "placeofservicetypename": "OFFICE",
        "phone": "(555) 586-9114",
        "zip": "04406",
        "communicatorbrandid": "21"
    }];
    // $scope.tagline = 'WHAT THE FUCK';
    console.log($scope.deptList)
    // Scheduler.getDepartments(saveDepartments)
    // Scheduler.getProviders(saveProviders)
        //$rootScope.isActive = function(viewLocation) {
        // return viewLocation === $location.path();
    // };
};
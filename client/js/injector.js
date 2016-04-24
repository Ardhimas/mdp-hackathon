var service = angular.module('SchedulerService');

exports.inject = function(service){
    require('./athenahealthapi.js').inject(service);
    service.controller('ScheduleController',exports.controller);
    return exports.controller;
};
'use strict';

var app = angular.module('app', ['ngResource']);

//enable CORS in Angular http requests
/*app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);*/
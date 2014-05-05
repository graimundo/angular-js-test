'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
   $routeProvider.when('/plugins',
       {
           templateUrl: 'partials/plugin-list.html',
           controller: 'appController'
       });
});

//enable CORS in Angular http requests
/*app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);*/
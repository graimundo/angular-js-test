'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/',
        {
            controller: 'appController'
        });
    $routeProvider.when('/plugins',
       {
           templateUrl: 'partials/plugin-list.html',
           controller: 'appController'
       });
    $routeProvider.when('/plugin/:pluginId',
        {
            templateUrl: 'partials/plugin-detail.html',
            controller: 'appController'
        });
    $routeProvider.when('/xpto',
        {
            templateUrl: 'partials/show-xpto.html',
            controller: 'appController'
        });
    $routeProvider.otherwise(
        {
            redirectTo: '/'
        });
});

//enable CORS in Angular http requests
/*app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);*/
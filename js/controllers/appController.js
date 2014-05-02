'use strict';

app.controller('appController',
    function ($scope) {

        //VM initialization
        $scope.hello = "Hello World!";
        $scope.count = 0;

        //application logic
        $scope.addCount = function () {
            //this could be a service call to execute business logic
            $scope.count++;
        }
    }
);
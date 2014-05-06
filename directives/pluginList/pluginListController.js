'use strict';

app.controller('pluginListController',
    function ($scope) {

        //get plugin count
        $scope.getPluginCount = function (plugins) {

            return plugins.length;
        };
    }
);

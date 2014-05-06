'use strict';

app.controller('appController',
    function ($scope, appService, $routeParams) {

        //VM initialization
        $scope.hello = appService.getHello;
        $scope.count = appService.getInitialCount;

        //get all plugins
        $scope.pluginList = appService.getPlugins();

        //get selected plugin
        appService.getPlugin($routeParams.pluginId).then(function(plugin) {
            $scope.plugin = plugin;
        });

        //application logic
        $scope.addCount = function () {
            //call service layer to execute business logic
            $scope.count = appService.addCount($scope.count);
        };
    }
);

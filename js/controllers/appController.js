'use strict';

app.controller('appController',
    function ($scope, appService, navigationService, $routeParams) {

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

        //navigation

        //constant navigation via navigation service
        $scope.pluginsRoute = navigationService.pluginsRoute;
        $scope.pluginRoute = navigationService.pluginRoute;

        //programmatic navigation via navigation service
        $scope.getPluginsRoute = function() {

            //Have navigation controller handle the navigation
            navigationService.getPluginsRoute();
        }

        $scope.getPluginRoute = function(pluginId) {

            //Have navigation controller handle the navigation
            navigationService.getPluginRoute(pluginId);
        }
    }
);

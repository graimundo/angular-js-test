'use strict';

app.factory('navigationService',
    function ($location) {
        var pluginsRouteConstant = "/plugins";
        var pluginRouteConstant = "/plugin";

        return {

            //navigation logic using contants
            pluginsRoute: "#" + pluginsRouteConstant,
            pluginRoute: "#" + pluginRouteConstant,

            //programatic navigation logic
            getPluginsRoute: function() {
                $location.url(pluginsRouteConstant);
            },

            getPluginRoute: function(pluginId) {
                $location.url(pluginRouteConstant + "/" + pluginId);
            }
        };
    }
);
'use strict';

app.factory('appService', function($resource) {
    return {
        //service methods and properties
        getHello : "Hello World!",
        getInitialCount: 0,
        addCount: function(currentCount) {
            currentCount++;
            return currentCount;
        },
        getPlugins: function() {
            var restEndpoint = $resource('/pentaho/plugin/marketplace/api/plugins');
            var plugins = restEndpoint.get();
            return plugins;
        }
    }
});
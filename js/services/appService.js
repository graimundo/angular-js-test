'use strict';

app.factory('appService',
    function($resource, $q) {
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
                return restEndpoint.get();
            },
            getPlugin: function(pluginId) {
                var deferred = $q.defer();

                var restEndpoint = $resource('/pentaho/plugin/marketplace/api/plugins');
                restEndpoint.get(function(data) {
                    for(var i = 0; i < data.plugins.length; i++)
                    {
                        if(data.plugins[i].id === pluginId)
                        {
                            deferred.resolve(data.plugins[i]);
                        }
                    }
                });

                return deferred.promise;
            }
        }
    }
);

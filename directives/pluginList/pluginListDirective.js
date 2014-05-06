'use strict';

app.directive('pluginList', function() {
    return {
        restrict: 'E',
        replace: true, //replaces the custom directive element with the corresponding expanded HTML, to be HTML-compliant.
        templateUrl: 'directives/pluginList/pluginListTemplate.html',
        //isolate scope
        scope: {
            plugins: "=",
            //pluginRoute matches plugin-route in html template
            pluginRoute: "=",
            //getPluginRoute matches get-plugin-route in html template
            //we could use a different name for the html attribute, using "=html-property" instead of "="
            getPluginRoute: "="
        }
    };
});

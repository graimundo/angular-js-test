'use strict';

app.directive('pluginList', function() {
    return {
        restrict: 'E',
        replace: true, //replaces the custom directive element with the corresponding expanded HTML, to be HTML-compliant.
        templateUrl: 'directives/pluginList/pluginListTemplate.html',
        controller: 'pluginListController',
        //isolate scope
        scope: {
            plugins: "=",
            //pluginRoute matches plugin-route in html template
            pluginRoute: "=",
            //getPluginRoute matches get-plugin-route in html template
            //we could use a different name for the html attribute, using "=html-property" instead of "="
            //'&' evaluates in the parent scope
            //'@' evaluates as a string
            //'=' evaluates in the isolate scope
            getPluginRoute: "="
        }
    };
});

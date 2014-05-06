'use strict';

app.directive('pluginDetail', function() {
    return {
        restrict: 'E',
        replace: true, //replaces the custom directive element with the corresponding expanded HTML, to be HTML-compliant.
        templateUrl: 'directives/pluginDetail/pluginDetailTemplate.html',
        //isolate scope
        scope: {
            plugin: "="
        }
    };
});

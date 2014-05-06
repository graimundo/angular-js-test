'use strict';

app.directive('myXpto', function($compile) {
    return {
        restrict: 'E',
        template: "<input type='text' data-ng-model='sampleData'/>{{sampleData}}<br/>"
    };
});

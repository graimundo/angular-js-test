'use strict';

app.directive('myXpto', function() {
    return {
        restrict: 'E',
        template: "<input type='text' data-ng-model='sampleData'/>{{sampleData}}<br/>"
    };
});

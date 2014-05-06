'use strict';

app.directive('myXpto', function($compile) {
    return {
        link: function(scope, element, attrs, controller) {
            var markup = "<input type='text' data-ng-model='sampleData'/>{{sampleData}}<br/>";
            var elementObj = angular.element(element);
            elementObj.html(markup);
            $compile(elementObj.contents())(scope);
        }
    }
});

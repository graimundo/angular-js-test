'use strict';

app.factory('appService',
    function() {
        return {
            //service methods and properties
            getHello : "Hello World!",
            getInitialCount: 0,
            addCount: function(currentCount) {
                currentCount++;
                return currentCount;
            }
        }
    }
);
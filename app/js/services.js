"use strict";

pencilBoxApp.factory('Subjects', ['$resource',
    function($resource){
        return $resource('json/Subjects.json', {}, {
            query: {method:'GET', isArray:true }
        });
    }]);
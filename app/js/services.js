"use strict";
pencilBoxApp.factory('Subjects', ['$resource',
  function($resource){
    return $resource('json/subjects/:subject/:topic.json', {}, {
      query: {method:'GET', isArray:true }
    });
  }]);

pencilBoxApp.factory('Apps', ['$resource',
  function($resource){
    return $resource('json/all.json', {}, {
      query: {method:'GET', isArray:true }
    });
  }]);
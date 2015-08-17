var pencilboxApp = angular.module('pencilboxApp', ['ngResource']);
"use strict";

pencilBoxApp.factory('Grades', ['$resource',
  function($resource){
    return $resource('json/grades.json', {}, {
      query: {method:'GET', isArray:true }
    });
  }]);
pencilBoxApp.factory('Subjects', ['$resource',
  function($resource){
    return $resource('json/:gradeId/subjects.json', {}, {
      query: {method:'GET', isArray:true }
    });
  }]);
pencilBoxApp.factory('Chapters', ['$resource',
    function($resource){
      return $resource('json/:gradeId/:subjectId/chapters.json', {}, {
        query: {method:'GET', isArray:true }
    });
  }]);
pencilBoxApp.factory('Contents', ['$resource',
    function($resource){
      return $resource('json/:gradeId/:subjectId/:chapterId.json', {}, {
        query: {method: 'GET', isArray:true }
      });
    }]);
pencilboxApp.factory('Apps', ['$resource',
      function($resource){
        return $resource('json/OtherApps.json', {}, {
          query: {method:'GET', isArray:true }
        });
      }]);
pencilBoxApp.factory('OtherApps', ['$resource',
        function($resource){
          return $resource('json/OtherApps.json', {}, {
            query: {method:'GET', isArray:true }
          });
        }]);
// pencilBoxApp.factory('Contents', ['$resource',
//         function($resource){
//           return $resource('json/:gradeId/:subjectId/videos.json', {}, {
//             query: {method: 'GET', isArray:true }
//           });
//         }]);

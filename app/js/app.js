var pencilBoxApp = angular.module('pencilBoxApp',['ngResource', 'ngRoute']);

pencilBoxApp.config(['$routeProvider',function($routeProvider){
  "use strict";
  $routeProvider.when('/subjects',{
    templateUrl : 'partials/home-view.html',
    controller: 'SubjectListController'
  })
  .when('/subjects/:subjectId/subsections', {
    templateUrl: 'partials/subsections-view.html',
    controller: 'SubSectionListController'
  })
  .when('/subjects/:subjectId', {
    templateUrl: 'partials/apps-view.html',
    controller: 'AppListController'
  })
  .when('/subjects/:subjectId/:topicId', {
    templateUrl: 'partials/topics-view.html',
    controller: 'TopicListController'
  })
  .otherwise({
    redirectTo: '/subjects'
  });
}]);
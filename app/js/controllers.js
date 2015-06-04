"use strict";
pencilBoxApp.controller('SubjectListController',['$scope','Subjects',
  function($scope, Subjects){
    $scope.subjects = Subjects.query();
  }]);

pencilBoxApp.controller('SubSectionListController', ['$scope', '$routeParams', 'Subjects',
  function($scope, $routeParams, Subjects) {
    $scope.subjects = Subjects.query();
    $scope.topics = Subjects.query({ subject: $routeParams.subjectId });
    $scope.current_subject = $routeParams.subjectId;
    $scope.isCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() === subject.toLowerCase();
    };
    $scope.isNotCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() !== subject.toLowerCase();
    };
    $scope.getSubjectColor = function() {
      for(var index=0; index < $scope.subjects.length; index++){
        if( $scope.subjects[index].id === $scope.current_subject){
          return $scope.subjects[index].color;
        }
      }
    };
  }]);

pencilBoxApp.controller('AppListController', ['$scope', '$routeParams', 'Subjects',
  function($scope, $routeParams, Subjects) {
    $scope.subjects = Subjects.query();
    $scope.apps = Subjects.query({ subject: $routeParams.subjectId });
    $scope.current_subject = $routeParams.subjectId;
    $scope.invokeCommand = function(command) {
      CommandApi.invokeCommand(command);
    };
    $scope.isCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() == subject.toLowerCase();
    };
    $scope.isNotCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() != subject.toLowerCase();
    };
    $scope.getSubjectColor = function() {
      for(var index=0; index < $scope.subjects.length; index++){
        if( $scope.subjects[index].id === $scope.current_subject){
          return $scope.subjects[index].color;
        }
      }
    };
  }]);
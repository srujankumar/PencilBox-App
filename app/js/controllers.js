"use strict";
// pencilBoxApp.controller('SubjectListController',['$scope','Subjects',
//   function($scope, Subjects){
//     $scope.subjects = Subjects.query();
//   }]);

pencilBoxApp.controller('GradeListController', ['$scope', 'Grades',
  function($scope, Grades){
    $scope.grades = Grades.query();
  }]);

pencilBoxApp.controller('SubjectListController', ['$scope', '$routeParams', 'Subjects', 'Grades',
  function($scope, $routeParams, Subjects, Grades) {
    $scope.subjects = Subjects.query({gradeId : $routeParams.gradeId });
    $scope.current_subject ="" ;
    $scope.current_grade = $routeParams.gradeId;
    $scope.isCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() === subject.toLowerCase();
    };
    $scope.isNotCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() !== subject.toLowerCase();
    };
  }]);

pencilBoxApp.controller('ChapterListController', ['$scope', '$routeParams', 'Chapters', 'Subjects',
  function ($scope, $routeParams, Chapters, Subjects){
    $scope.subjects = Subjects.query({ gradeId : $routeParams.gradeId });
    $scope.chapters = Chapters.query({ subjectId : $routeParams.subjectId, gradeId : $routeParams.gradeId });
    $scope.current_grade = $routeParams.gradeId;
    //$scope.current_chapter="";
    $scope.current_subject = $routeParams.subjectId;
    $scope.isCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() === subject.toLowerCase();
    };
    $scope.isNotCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() !== subject.toLowerCase();
    };
  }]);

pencilBoxApp.controller('ContentListController', ['$scope', '$routeParams', 'Contents', 'Chapters', 'Subjects',
  function ($scope, $routeParams, Contents, Chapters, Subjects){
    $scope.current_grade = $routeParams.gradeId;
    $scope.current_subject = $routeParams.subjectId;
    $scope.current_chapter = $routeParams.chapterId;
    $scope.subjects = Subjects.query({ gradeId : $routeParams.gradeId});
    $scope.chapters = Chapters.query({ subjectId : $routeParams.subjectId, gradeId : $routeParams.gradeId });
    $scope.contents = Contents.query({ chapterId : $routeParams.chapterId,
    subjectId : $routeParams.subjectId, gradeId : $routeParams.gradeId });
    $scope.showOverlay = function(){
      var innerHTML = '<div id="overlayContent"><video controls autoplay="autoplay" src="videos/Baahubali-Trailer.mp4" class="video"></video></div>';
      var overlay = new Overlay();
      overlay.setContent(innerHTML);
    };
    $scope.isCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() === subject.toLowerCase();
    };
    $scope.isNotCurrentSubject = function(subject) {
      return $scope.current_subject.toLowerCase() !== subject.toLowerCase();
    };
    $scope.isCurrentChapter = function(chapter) {
      return $scope.current_chapter.toLowerCase() === chapter.toLowerCase();
    };
    $scope.isNotCurrentChapter = function(chapter) {
      return $scope.current_chapter.toLowerCase() !== chapter.toLowerCase();
    };  
    $scope.invokeCommand = function(command) {
      CommandApi.invokeCommand(command);
    };
  }]);
  pencilBoxApp.controller('OtherAppController', ['$scope', 'OtherApps',
      function($scope, OtherApps) {
        $scope.otherApps = OtherApps.query();
      }]);
  pencilBoxApp.controller('SearchResultController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.keyword = $routeParams.keyword;
  }]);

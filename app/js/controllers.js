pencilBoxApp.controller('SubjectListController',['$scope','Subjects', function($scope, Subjects){
        $scope.subjects = Subjects.query();
    }]);
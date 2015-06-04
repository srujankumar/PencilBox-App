describe('SubjectList Controller', function(){

  /*var scope, Subjects, defer, data = [ "Physics", "Chemistry", "Biology"];

  beforeEach(module('pencilBoxApp'));

  beforeEach(inject(function($controller, $rootScope, $q){
    "use strict";
    Subjects = {
      query: function(){
        defer = $q.defer();
        var promise = defer.promise;
        return promise.then(function(result){
          return result;
        });
      }
    };

    spyOn(Subjects,'query').and.callThrough();
    scope = $rootScope.$new();
    $controller('SubjectListController', {
      $scope : scope,
      Subjects : Subjects
    });
  }));*/

  var mockSubjects, scope = {}, data = [ "Physics", "Chemistry", "Biology"];;

  beforeEach(module('pencilBoxApp'));

  beforeEach(function(){
    "use strict";
    mockSubjects = {
      query: function(){
        return data;
      }
    };

    module(function($provide){
      $provide.value('Subjects',mockSubjects);
    });

  });

  beforeEach(inject(function($controller){

    $controller('SubjectListController', {
      $scope : scope,
    });

  }));

  it('should return subjects', function(){
    expect(scope.subjects).toBeDefined();
  });

  it('should contain subjects more than zero', function(){
    expect(scope.subjects).toBe(data);
  });

});

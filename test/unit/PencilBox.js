describe('PencilBox App', function(){

  beforeEach(module('pencilBoxApp'));

  var scope = {};
  beforeEach(inject(function($controller){
    $controller('SubjectListController',{ $scope : scope});
  }));

  it('should list all the subjects', function(){
    expect(scope.subjects).toBeDefined();
  });

  it('should contain subjects more than zero', function(){
    expect(scope.subjects.length).toBeGreaterThan(0);
  });

});

describe('PencilBox App',function(){
  "use strict";

  beforeEach(module('pencilBoxApp'));

  it('should map routes to controllers',function(){
    inject(function($route){
      expect($route.routes['/Subjects'].controller).toBe('SubjectListController');
      expect($route.routes['/Subjects'].templateUrl).toBe('partials/home-view.html');

      expect($route.routes[null].redirectTo).toEqual('/Subjects');
    });
  });
})
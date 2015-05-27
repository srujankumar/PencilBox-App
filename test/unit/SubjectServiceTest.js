describe('Subject Service', function(){
    "use strict";

    var Subjects, httpBackend;

    beforeEach(function() {

        module('pencilBoxApp');

        inject(function($injector){
            httpBackend = $injector.get('$httpBackend');
            Subjects = $injector.get('Subjects');
        });

        var returnData = [ "Physics", "Chemistry", "Biology"];
        httpBackend.whenGET('json/Subjects.json').respond(returnData);

    });

    it('Should return response', function(){
        var result = Subjects.query();
        expect(result).toBeDefined();
    });

    it('should return an array', function(){
        var result = Subjects.query();
        httpBackend.flush();
        expect(result.length).toEqual(3);
    });
});
"use strict"
describe('PencilBox App', function() {

  beforeEach(function(){
    browser.get('/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('BalaSwecha');
    expect(element(by.css('.home-view')).isPresent()).toBe(true);
  });
});
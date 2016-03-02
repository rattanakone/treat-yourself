'use strict';

describe('Controller: LunchCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var LunchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LunchCtrl = $controller('LunchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LunchCtrl.awesomeThings.length).toBe(3);
  });
});

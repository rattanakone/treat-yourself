'use strict';

describe('Controller: LooksCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var LooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LooksCtrl = $controller('LooksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LooksCtrl.awesomeThings.length).toBe(3);
  });
});

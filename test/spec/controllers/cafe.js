'use strict';

describe('Controller: CafeCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var CafeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CafeCtrl = $controller('CafeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CafeCtrl.awesomeThings.length).toBe(3);
  });
});

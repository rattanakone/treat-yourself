'use strict';

describe('Controller: DatenightCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var DatenightCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatenightCtrl = $controller('DatenightCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DatenightCtrl.awesomeThings.length).toBe(3);
  });
});

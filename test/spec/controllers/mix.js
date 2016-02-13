'use strict';

describe('Controller: MixCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var MixCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MixCtrl = $controller('MixCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MixCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: DinnerCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var DinnerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DinnerCtrl = $controller('DinnerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DinnerCtrl.awesomeThings.length).toBe(3);
  });
});

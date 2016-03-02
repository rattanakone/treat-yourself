'use strict';

describe('Controller: LadiesnightCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var LadiesnightCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LadiesnightCtrl = $controller('LadiesnightCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LadiesnightCtrl.awesomeThings.length).toBe(3);
  });
});

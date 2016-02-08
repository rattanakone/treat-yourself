'use strict';

describe('Controller: DaytimeCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var DaytimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DaytimeCtrl = $controller('DaytimeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DaytimeCtrl.awesomeThings.length).toBe(3);
  });
});

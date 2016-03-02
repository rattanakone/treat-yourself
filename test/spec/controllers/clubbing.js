'use strict';

describe('Controller: ClubbingCtrl', function () {

  // load the controller's module
  beforeEach(module('treatYourselfApp'));

  var ClubbingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClubbingCtrl = $controller('ClubbingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClubbingCtrl.awesomeThings.length).toBe(3);
  });
});

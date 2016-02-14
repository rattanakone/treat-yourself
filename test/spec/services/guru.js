'use strict';

describe('Service: guru', function () {

  // load the service's module
  beforeEach(module('treatYourselfApp'));

  // instantiate service
  var guru;
  beforeEach(inject(function (_guru_) {
    guru = _guru_;
  }));

  it('should do something', function () {
    expect(!!guru).toBe(true);
  });

});

'use strict';

describe('Service: outfit', function () {

  // load the service's module
  beforeEach(module('treatYourselfApp'));

  // instantiate service
  var outfit;
  beforeEach(inject(function (_outfit_) {
    outfit = _outfit_;
  }));

  it('should do something', function () {
    expect(!!outfit).toBe(true);
  });

});

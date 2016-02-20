'use strict';

describe('Service: hair', function () {

  // load the service's module
  beforeEach(module('treatYourselfApp'));

  // instantiate service
  var hair;
  beforeEach(inject(function (_hair_) {
    hair = _hair_;
  }));

  it('should do something', function () {
    expect(!!hair).toBe(true);
  });

});

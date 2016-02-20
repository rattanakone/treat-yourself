'use strict';

describe('Service: makeup', function () {

  // load the service's module
  beforeEach(module('treatYourselfApp'));

  // instantiate service
  var makeup;
  beforeEach(inject(function (_makeup_) {
    makeup = _makeup_;
  }));

  it('should do something', function () {
    expect(!!makeup).toBe(true);
  });

});

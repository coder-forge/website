var assert = require('assert'),
    helper = require('../../test_helper');

describe('Tools', function(){

  var tools;

  beforeEach(function(done){
    tools = helper.requireCoverage('lib/tools', true);
    done();
  })

  it('will get tools', function(done){

    tools.get()
      .then(function(actual){
        //helper.writeFixture(actual, 'test/app/lib/fixtures/tools.get.expected.json');
        assert.deepEqual(actual, require('./fixtures/tools.get.expected.json'));
        done();
      })
      .catch(done);
  });
});

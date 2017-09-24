var assert = require('assert'),
    helper = require('../../test_helper');

describe('Attend', function(){

  var attend;

  beforeEach(function(done){
    attend = helper.requireCoverage('lib/attend', true);
    done();
  })

  it('will connect to meetup', function(done){

    var request = attend.__set__('request', {
      get: function(url, cb){
        cb(null, {
          body: JSON.stringify(require('./fixtures/attend.get.meetup.json')),
        });
      }
    });

    attend.getMeetupEvents()
      .then(function(actual){
        //helper.writeFixture(events, 'test/app/lib/fixtures/attend.get.expected.json');
        assert.deepEqual(actual, require('./fixtures/attend.get.expected.json'));
        done();
      })
      .catch(done);
  });
});

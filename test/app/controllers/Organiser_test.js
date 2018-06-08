var assert = require('assert'),
    helper = require('../../test_helper');

describe('Organiser model', function(){

  var organiser = helper.requireCoverage('controllers/Organiser', true);

  it.only('will create organiser', function(){

    var data = {
      forgeName: 'test',
      organiserName: 'testing',
      wallet: '0xd7ccb1b018b4e2f4717ee372dc1b2528854aaf53',
      about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }

    organiser.__set__('Organiser', {
      save: function(cb){
        var res = data;
        res._id = 'this is my id';
        cb(null, res);
      }
    })

    return organiser.post(data)
      .then(doc => {
        var expected = data;
        expected._id = 'this is my id';
        assert.deepEqual(doc, expected);
      });

  });
  it('will update organiser', function(done){});
  it('will get organiser', function(done){});
  it('will delete organiser', function(done){});

});




describe('integration tests', function(){

  it('will create organiser', function(){

    request(websiteUrl+'/gym')
      .post(data)
      .result(res => {
        res;
      });
  });
})

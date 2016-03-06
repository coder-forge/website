describe("MongoDB integration test", function(){

  var config, client

  beforeEach(function(done){
    config = config = require('../../config')()
    client = require('mongodb').MongoClient
    done()
  })


  it('server is running', function(done){

    client.connect('mongodb://'+config.mongo.host+':'+config.mongo.port+'/'+config.mongo.dbName, function(err){
      expect(err).toBe(null)
      client.close()
      done()
    })
  })

})

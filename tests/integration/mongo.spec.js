describe('MongoDB integration test', function(){
  it('server is running', function(done){
    var client = require('mongodb').MongoClient,
      config = require('../../config')()
    client.connect('mongodb://'+config.mongo.host+':'+config.mongo.port+'/'+config.mongo.dbName, function(err){
      expect(err).toBe(null)
      client.close()
      done()
    })
  })
})

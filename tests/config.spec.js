describe("Configuration Setup", function(){

  it('should load local configurations', function(done){
    var config = require('../config')()
    expect(config.mode).toBe('local')
    done()
  })

  it('should load staging configuration', function(done){
    var config = require('../config')('staging')
    expect(config.mode).toBe('staging')
    done()
  })

  it('should load production configuration', function(done){
    var config = require('../config')('production')
    expect(config.mode).toBe('production')
    done()
  })
})

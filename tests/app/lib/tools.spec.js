
var toolsLib

describe('tools controller', function(){

  beforeEach(function(done){
    toolsLib = require('../../../app/lib/tools.js')
    done()
  })

  it('Should return tools class', function(done){

    var actual = toolsLib.constructor.toString()
    actual = actual.substr('function '.length)
    actual = actual.substr(0, actual.indexOf('('))

    expect(actual).toBe('ToolsClass')
    done()
  })

  it('Should return view', function(done){

    var req = {},
      res = {
        render: function(template){}
      }

    spyOn(res, 'render')

    toolsLib.view(req, res)
    expect(res.render).toHaveBeenCalledWith('admin/index')
    done()
  })
})

var fs = require('fs'),
    path = require('path'),
    rewire = require('rewire');

module.exports = {

  requireCoverage: function(lib, coverage){

    var module = path.normalize(__dirname+'/../'+lib);

    if(coverage) return rewire(module);
    return require(module);
  },

  /**
   * Write file to directory.
   *  - helper.writeFixture(actual, 'test/app/lib/fixtures/tools.get.expected.json');
   * @param  {Object} obj The object to write to file.
   * @param  {String} dir The directory + file relative to project root.
   */
  writeFixture: function(obj, dir){
    fs.writeFileSync(dir, JSON.stringify(obj));
  },

}

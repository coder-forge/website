var mongoose = require('mongoose')

var tool = new mongoose.Schema({
  title: {type: String, require: true},
  url: String,
  tags: [String]
})

module.exports = new mongoose.model(tool, 'tool')

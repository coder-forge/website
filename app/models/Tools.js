var mongoose = require('mongoose')

var tool = new mongoose.Schema({
  title: {type: String, required: true},
  url: String,
  icon: String,
  tags: {type: [String], required: true}
})

module.exports = new mongoose.model(tool, 'tool')

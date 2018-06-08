var mongoose = require('mongoose')

var organiser = new mongoose.Schema({
  forgeName: String,
  organiserName: String,
  wallet: String,
  about: String,
});

module.exports = new mongoose.model(organiser, 'organiser')

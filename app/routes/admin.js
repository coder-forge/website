var express = require('express')
  ,router = express.Router()

var tools = require('../lib/tools')

router.get('/tools', tools.view)
router.post('/tools', tools.upsert)

module.exports = router

var express = require('express')//any need for this routing now as it a meteor framework?
  ,router = express.Router()

var tools = require('../lib/tools')

router.get('/tools', tools.view)
router.post('/tools', tools.upsert)

module.exports = router

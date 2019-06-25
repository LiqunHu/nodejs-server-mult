const express = require('express')
const services = require('./service')
const router = express.Router()

// map
router.post('/MapBaseControl/:method', services.MapBaseControl)
module.exports = router

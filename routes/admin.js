const express = require('express')
const services = require('./service')
const router = express.Router()

// admin
router.post('/auth/SystemApiControl/:method', services.SystemApiControl)
router.post('/auth/GroupControl/:method', services.GroupControl)
router.post('/auth/OperatorControl/:method', services.OperatorControl)
router.post('/auth/ResetPassword/:method', services.ResetPasswordControl)
router.post('/user/UserSetting/:method', services.UserSettingControl)
router.post('/device/DeviceControl/:method', services.DeviceControl)
module.exports = router

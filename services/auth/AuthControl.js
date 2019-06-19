const common = require('../../util/CommonUtil.js')
const logger = require('../../app/logger').createLogger(__filename)
const srv = require('./AuthServer')

module.exports = async (req, res) => {
  try {
    let method = common.reqTrans(req, __filename)
    let ret = 'common_01'
    logger.debug(method)
    if (method === 'signin') {
      ret = await srv.signinAct(req)
    } else if (method === 'signinBySms') {
      ret = await srv.signinBySmsAct(req)
    } else if (method === 'signinByWx') {
      ret = await srv.signinByWxAct(req)
    } else if (method === 'signout') {
      ret = await srv.signoutAct(req)
    } else if (method === 'loginSms') {
      ret = await srv.loginSmsAct(req)
    } else if (method === 'captcha') {
      ret = await srv.captchaAct(req)
    } else if (method === 'registerSms') {
      ret = await srv.registerSmsAct(req)
    } else if (method === 'registerByPhone') {
      ret = await srv.registerByPhoneAct(req)
    } else if (method === 'registerByWx') {
      ret = await srv.registerByWxAct(req)
    } else if (method === 'registerDevice') {
      ret = await srv.registerDeviceAct(req)
    } else if (method === 'signinDevice') {
      ret = await srv.signinDeviceAct(req)
    }
    common.sendData(res, ret)
  } catch (error) {
    common.sendFault(res, error)
  }
}

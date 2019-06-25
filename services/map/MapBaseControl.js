const common = require('../../util/CommonUtil')
const logger = require('../../app/logger').createLogger(__filename)
const srv = require('./MapBaseServer')

module.exports = async (req, res) => {
  try {
    let method = common.reqTrans(req, __filename)
    let ret = 'common_01'
    logger.debug(method)
    if (method === 'getShowData') {
      ret = await srv.getShowDataAct(req)
    } 
    common.sendData(res, ret)
  } catch (error) {
    common.sendFault(res, error)
  }
}

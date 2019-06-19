const rabbitmqClinet = require('server-utils').rabbitmqClinet
const wsUtil = require('server-utils').websocketUtil
const smsClient = require('server-utils').smsClient

const common = require('../../util/CommonUtil')
const logger = require('../../app/logger').createLogger(__filename)

exports.searchAct = async req => {
  let user = req.user
  let device = req.device
  logger.info(user)
  logger.info(device)
  logger.debug('search')
  return common.success({ aaaa: 1111 })
}

exports.search2Act = async () => {
  let response = await wsUtil.serverRequest('pooltest', '/test/test/search', { a: 1, b: 2 })
  return common.success(response)
}

exports.search3Act = async () => {
  await rabbitmqClinet.sendToQueue('test', '/test/test/search', { a: 1, b: 2 })
  // 延时10s
  await rabbitmqClinet.sendToDelay('test', '/test/test/search', { a: 1, b: 2 }, 10000)
  return common.success()
}

exports.search4Act = async () => {
  smsClient.sendMessage('18698729476', '这是个测试短信')
  return common.success()
}

exports.search5Act = async req => {
  let rsp = await common.fileSave(req, 'test')

  return common.success(rsp)
}

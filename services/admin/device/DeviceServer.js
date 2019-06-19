const redisClient = require('server-utils').redisClient
const moment = require('moment')
const NodeRSA = require('node-rsa')

const common = require('../../../util/CommonUtil')
const GLBConfig = require('../../../util/GLBConfig')
const logger = require('../../../app/logger').createLogger(__filename)
const model = require('../../../app/model')
const Op = model.Op

const tb_device = model.common_device

exports.initAct = async () => {
  let returnData = {
    DEVICE_TYPE_INFO: GLBConfig.DEVICE_TYPE_INFO,
    DEVICE_STATE_INFO: GLBConfig.DEVICE_STATE_INFO
  }

  return common.success(returnData)
}

exports.searchAct = async req => {
  let doc = common.docValidate(req),
    returnData = {}

  let queryStr = 'select * from tbl_common_device where state = "1"'
  let replacements = []

  if (doc.search_text) {
    queryStr += ' and (device_id like ? or device_mac like ? device_mac2 like ?)'
    let search_text = '%' + doc.search_text + '%'
    replacements.push(search_text)
    replacements.push(search_text)
    replacements.push(search_text)
  }

  let result = await model.queryWithCount(doc, queryStr, replacements)

  returnData.total = result.count
  returnData.rows = []

  for (let d of result.data) {
    let dj = JSON.parse(JSON.stringify(d))
    dj.device_access_time = moment(dj.device_access_time).format('YYYY-MM-DD HH:mm')
    returnData.rows.push(dj)
  }

  return common.success(returnData)
}

exports.addAct = async req => {
  let doc = common.docValidate(req)
  let device = await tb_device.findOne({
    where: {
      [Op.or]: [{ device_mac: doc.device_mac }, { device_mac: doc.device_mac }, { device_mac2: doc.device_mac2 }, { device_mac2: doc.device_mac2 }]
    }
  })

  if (device) {
    return common.error('device_01')
  }

  let key = new NodeRSA({ b: 1024 }) //生成1024位秘钥

  await tb_device.create({
    device_name: doc.device_name,
    device_mac: doc.device_mac,
    device_mac2: doc.device_mac2,
    device_hardware_version: doc.device_hardware_version,
    device_software_version: doc.device_software_version,
    device_type: doc.device_type,
    device_state: '0', // DEVICE_STATE_INFO
    device_public_key: key.exportKey('pkcs8-public'),
    device_private_key: key.exportKey('pkcs8-private')
  })

  return common.success()
}

exports.modifyAct = async req => {
  let doc = common.docValidate(req)

  let modidevice = await tb_device.findOne({
    where: {
      device_id: doc.old.device_id,
      state: GLBConfig.ENABLE
    }
  })
  if (modidevice) {
    modidevice.device_name = doc.new.device_name
    modidevice.device_hardware_version = doc.new.device_hardware_version
    modidevice.device_software_version = doc.new.device_software_version
    modidevice.device_type = doc.new.device_type
    modidevice.device_state = doc.new.device_state
    await modidevice.save()

    logger.debug('modify success')
    return common.success()
  } else {
    return common.error('device_02')
  }
}

exports.deleteAct = async req => {
  let doc = common.docValidate(req)

  let deldevice = await tb_device.findOne({
    where: {
      device_id: doc.device_id,
      state: GLBConfig.ENABLE
    }
  })

  if (deldevice) {
    deldevice.state = GLBConfig.DISABLE
    await deldevice.save()
    redisClient.del(['REDISKEYAUTH', 'DEVICE', deldevice.device_id].join('_'))
    return common.success()
  } else {
    return common.error('operator_03')
  }
}

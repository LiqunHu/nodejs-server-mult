const rp = require('request-promise')

const common = require('../../../util/CommonUtil')
const GLBConfig = require('../../../util/GLBConfig')
const logger = require('../../../app/logger').createLogger(__filename)
const model = require('../../../app/model')
const config = require('../../../app/config')

const tb_user = model.common_user
const tb_user_wechat = model.common_user_wechat

exports.changePasswordAct = async req => {
  let doc = common.docValidate(req)
  let user = req.user

  if (user.user_password != doc.old_password) {
    return common.error('usersetting_01')
  }

  let modiuser = await tb_user.findOne({
    where: {
      user_id: user.user_id,
      state: GLBConfig.ENABLE
    }
  })

  if (modiuser) {
    modiuser.user_password = doc.password
    await modiuser.save()
    logger.debug('modisuccess')
    return common.success()
  } else {
    return common.error('usersetting_02')
  }
}

exports.addWxAppAct = async req => {
  let doc = common.docValidate(req)
  let user = req.user

  if (!config.weixin[doc.app_id]) {
    return common.error('auth_11')
  }

  let url =
    'https://api.weixin.qq.com/sns/jscode2session?appid=' +
    doc.app_id +
    '&secret=' +
    config.weixin[doc.app_id] +
    '&js_code=' +
    doc.wx_code +
    '&grant_type=authorization_code'
  let wxAuth = await rp(url)
  let wxAuthjs = JSON.parse(wxAuth)

  if (wxAuthjs.openid) {
    let wechatid = await tb_user_wechat.findOne({
      where: {
        user_wechat_appid: doc.app_id,
        user_wechat_openid: wxAuthjs.openid
      }
    })

    if (wechatid) {
      return common.error('auth_12')
    }

    await tb_user_wechat.create({
      user_id: user.user_id,
      user_wechat_appid: doc.app_id,
      user_wechat_openid: wxAuthjs.openid || '',
      user_wechat_unionid: wxAuthjs.unionid || ''
    })

    return common.success()
  } else {
    return common.error('auth_05')
  }
}

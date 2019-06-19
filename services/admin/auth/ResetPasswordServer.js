const common = require('../../../util/CommonUtil')
const GLBConfig = require('../../../util/GLBConfig')
const logger = require('../../../app/logger').createLogger(__filename)
const model = require('../../../app/model')
const Op = model.Op

const tb_user = model.common_user

exports.searchAct = async req => {
  let doc = common.docValidate(req)

  let user = await tb_user.findOne({
    where: {
      [Op.or]: [{ user_phone: doc.search_text }, { user_username: doc.search_text }, { user_email: doc.search_text }],
      user_type: {
        [Op.not]: GLBConfig.USER_TYPE.TYPE_ADMINISTRATOR
      }
    }
  })

  if (user) {
    let ret = JSON.parse(JSON.stringify(user))
    delete ret.user_password
    return common.success(ret)
  } else {
    return common.error('resetpassword_01')
  }
}

exports.resetAct = async req => {
  let doc = common.docValidate(req)

  let user = await tb_user.findOne({
    where: {
      user_id: doc.user_id,
      updated_at: doc.updated_at,
      version: doc.version
    }
  })

  if (user) {
    user.user_password = GLBConfig.INITPASSWORD
    await user.save()
    logger.debug('modisuccess')
    return common.success()
  } else {
    return common.error('resetpassword_01')
  }
}

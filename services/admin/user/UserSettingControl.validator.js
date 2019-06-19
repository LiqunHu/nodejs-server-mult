const Joi = require('joi')

module.exports = {
  name: 'UserSetting Services',
  apiList: {
    changePassword: {
      name: '修改密码',
      enname: 'UserSettingChangePassword',
      tags: ['UserSetting'],
      path: '/api/admin/user/UserSetting/changePassword',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          old_password: Joi.string(),
          password: Joi.string()
        })
      }
    },
    addWxApp: {
      name: '已有用户关联小程序',
      enname: 'UserSettingAddWxApp',
      tags: ['AddWxApp'],
      path: '/api/admin/user/UserSetting/addWxApp',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          app_id: Joi.string(),
          wx_code: Joi.string()
        })
      }
    }
  }
}

const Joi = require('joi')

module.exports = {
  name: 'ResetPassword Services',
  apiList: {
    search: {
      name: '查询客户信息',
      enname: 'ResetPasswordSearch',
      tags: ['ResetPassword'],
      path: '/api/admin/auth/ResetPassword/search',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          search_text: Joi.string().empty('').max(50)
        })
      }
    },
    reset: {
      name: '重置密码',
      enname: 'ResetPasswordReset',
      tags: ['ResetPassword'],
      path: '/api/admin/auth/ResetPassword/reset',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          user_id: Joi.string().max(50),
          version: Joi.number().integer(),
          updated_at: Joi.string().max(50)
        })
      }
    }
  }
}

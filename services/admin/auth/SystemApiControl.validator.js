const Joi = require('joi')

module.exports = {
  name: 'SystemApiControl Services',
  apiList: {
    init: {
      name: '获取数据字典',
      enname: 'SystemApiControlinit',
      tags: ['SystemApiControl'],
      path: '/api/admin/auth/SystemApiControl/init',
      type: 'post',
      JoiSchema: {}
    },
    search: {
      name: 'API树查询',
      enname: 'SystemApiControlsearch',
      tags: ['SystemApiControl'],
      path: '/api/admin/auth/SystemApiControl/search',
      type: 'post',
      JoiSchema: {}
    },
    addFolder: {
      name: '增加目录',
      enname: 'SystemApiControladdFolder',
      tags: ['SystemApiControl'],
      path: '/api/admin/auth/SystemApiControl/addFolder',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          parent_id: Joi.number().integer(),
          systemmenu_icon: Joi.string().max(50),
          systemmenu_name: Joi.string().max(50)
        })
      }
    },
    modifyFolder: {
      name: '修改目录',
      enname: 'SystemApiControlmodifyFolder',
      tags: ['SystemApiControl'],
      path: '/api/admin/auth/SystemApiControl/modifyFolder',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          systemmenu_id: Joi.number().integer(),
          systemmenu_icon: Joi.string().max(50),
          systemmenu_name: Joi.string().max(50)
        })
      }
    },
    addMenu: {
      name: '增加API',
      enname: 'SystemApiControladdMenu',
      tags: ['SystemApiControl'],
      path: '/api/admin/auth/SystemApiControl/addMenu',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          parent_id: Joi.number().integer(),
          api_path: Joi.string().max(300),
          auth_flag: Joi.string().max(2),
          show_flag: Joi.string().max(2),
          systemmenu_name: Joi.string().max(300),
          systemmenu_mobile_icon: Joi.string().empty('').max(100),
          systemmenu_mobile_backcolor: Joi.string().empty('').max(100)
        })
      }
    },
    modifyMenu: {
      name: '修改API',
      enname: 'SystemApiControlmodifyMenu',
      tags: ['SystemApiControl'],
      path: '/api/admin/auth/SystemApiControl/modifyMenu',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          systemmenu_id: Joi.number().integer(),
          api_path: Joi.string().max(300),
          auth_flag: Joi.string().max(2),
          show_flag: Joi.string().max(2),
          systemmenu_name: Joi.string().max(300),
          systemmenu_mobile_icon: Joi.string().empty('').max(100),
          systemmenu_mobile_backcolor: Joi.string().empty('').max(100)
        })
      }
    }
  }
}

const Joi = require('joi')
const model = require('../../../app/model')

module.exports = {
  name: 'DeviceControl Services',
  apiList: {
    init: {
      name: '获取数据字典',
      enname: 'DeviceControlinit',
      tags: ['DeviceControl'],
      path: '/api/admin/device/DeviceControl/init',
      type: 'post',
      JoiSchema: {}
    },
    search: {
      name: '设备查询',
      enname: 'DeviceControlsearch',
      tags: ['DeviceControl'],
      path: '/api/admin/device/DeviceControl/search',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          search_text: Joi.string()
            .empty('')
            .max(50),
          limit: Joi.number().integer(),
          offset: Joi.number().integer()
        })
      }
    },
    add: {
      name: '增加设备',
      enname: 'DeviceControladd',
      tags: ['DeviceControl'],
      path: '/api/admin/device/DeviceControl/add',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          device_name: Joi.string().max(200),
          device_mac: Joi.string().max(20),
          device_mac2: Joi.string()
            .empty('')
            .max(20),
          device_hardware_version: Joi.string()
            .empty('')
            .max(20),
          device_software_version: Joi.string()
            .empty('')
            .max(20),
          device_type: Joi.string()
            .empty('')
            .max(10)
        })
      }
    },
    modify: {
      name: '修改设备',
      enname: 'DeviceControlmodify',
      tags: ['DeviceControl'],
      path: '/api/admin/device/DeviceControl/modify',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          new: Joi.object().keys(model.model2Schema(model.common_device)),
          old: Joi.object().keys(model.model2Schema(model.common_device))
        })
      }
    },
    delete: {
      name: '删除设备',
      enname: 'DeviceControldelete',
      tags: ['DeviceControl'],
      path: '/api/admin/device/DeviceControl/delete',
      type: 'post',
      JoiSchema: {
        body: Joi.object().keys({
          device_id: Joi.string().max(50)
        })
      }
    }
  }
}

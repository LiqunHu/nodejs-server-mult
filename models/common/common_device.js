/* 设备表 */
const db = require('../../app/db')
const uuid = require('uuid')

module.exports = db.defineModel('tbl_common_device', {
  device_id: {
    type: db.UUID,
    defaultValue: function() {
      return uuid.v1().replace(/-/g, '')
    },
    primaryKey: true,
    comment: '主键'
  },
  device_mac: {
    type: db.STRING(20),
    allowNull: false,
    comment: '设备mac地址'
  },
  device_mac2: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '设备mac地址2'
  },
  device_name: {
    type: db.STRING(200),
    defaultValue: '',
    allowNull: false,
    comment: '设备名称'
  },
  device_hardware_version: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '硬件版本'
  },
  device_software_version: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '软件版本'
  },
  device_type: {
    type: db.STRING(10),
    defaultValue: '',
    allowNull: false,
    comment: '设备类型 DEVICE_TYPE_INFO'
  },
  device_state: {
    type: db.STRING(10),
    defaultValue: '',
    allowNull: false,
    comment: '设备状态 DEVICE_STATE_INFO'
  },
  device_private_key: {
    type: db.STRING(1200),
    defaultValue: '',
    allowNull: false,
    comment: '设备私钥'
  },
  device_public_key: {
    type: db.STRING(500),
    defaultValue: '',
    allowNull: false,
    comment: '设备公钥'
  },
  device_last_ip: {
    type: db.STRING(30),
    defaultValue: '',
    allowNull: false,
    comment: '设备最后一次登录ip地址'
  },
  device_access_time: {
    type: db.DATE,
    defaultValue: db.NOW,
    allowNull: false,
    comment: '设备最后一次登录时间'
  }
})

/* 用户表 */
const CryptoJS = require('crypto-js')
const uuid = require('uuid')
const db = require('../../app/db')

module.exports = db.defineModel('tbl_common_user', {
  user_id: {
    type: db.UUID,
    defaultValue: function() {
      return uuid.v1().replace(/-/g, '')
    },
    primaryKey: true,
    comment: '主键'
  },
  user_username: {
    type: db.STRING(100),
    allowNull: false,
    unique: true,
    comment: '登陆用户名'
  },
  user_type: {
    type: db.STRING(10),
    defaultValue: '',
    allowNull: false,
    comment: '用户类型 TYPE_DEFAULT TYPE_ADMINISTRATOR'
  },
  user_email: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: 'email'
  },
  user_phone: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '手机'
  },
  user_password: {
    type: db.STRING(100),
    allowNull: false,
    set: function(val) {
      this.setDataValue('user_password', CryptoJS.MD5(val).toString())
    },
    comment: '密码 请从各种查询中删除'
  },
  user_name: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '姓名'
  },
  user_gender: {
    type: db.STRING(1),
    defaultValue: '',
    allowNull: false,
    comment: '性别 '
  },
  user_avatar: {
    type: db.STRING(200),
    defaultValue: '',
    allowNull: false,
    comment: '头像 '
  },
  user_province: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '省 '
  },
  user_city: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '市/县'
  },
  user_district: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '区'
  },
  user_address: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '地址'
  },
  user_zipcode: {
    type: db.STRING(32),
    defaultValue: '',
    allowNull: false,
    comment: '邮编'
  },
  user_remark: {
    type: db.STRING(200),
    defaultValue: '',
    allowNull: false,
    comment: '备注'
  }
})

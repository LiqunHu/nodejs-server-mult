/* 用户表 */
const db = require('../../app/db')

module.exports = db.defineModel('tbl_common_user_wechat', {
  user_wechat_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  user_id: {
    type: db.UUID,
    allowNull: false,
    comment: '外键 tbl_common_user'
  },
  user_wechat_appid: {
    type: db.STRING(100),
    allowNull: false,
    comment: '微信appid'
  },
  user_wechat_openid: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '微信openid'
  },
  user_wechat_unionid: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '微信unionid'
  }
})

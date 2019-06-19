/* 系统通用日志只记录授权交易查询,上传类交易不记录 */
const db = require('../../app/db')

module.exports = db.defineModel('tbl_common_userlog', {
  userlog_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  user_id: {
    type: db.UUID,
    defaultValue: '',
    allowNull: false,
    comment: '操作用户id'
  },
  api_function: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '功能'
  },
  userlog_method: {
    type: db.STRING(50),
    defaultValue: '',
    allowNull: false,
    comment: '方法'
  },
  userlog_para: {
    type: db.TEXT,
    comment: '请求报文'
  }
})

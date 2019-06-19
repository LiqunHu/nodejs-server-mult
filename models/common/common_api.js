/* 系统api表 */
const db = require('../../app/db')
const GLBConfig = require('../../util/GLBConfig')

module.exports = db.defineModel('tbl_common_api', {
  api_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  api_name: {
    type: db.STRING(300),
    defaultValue: '',
    allowNull: false,
    comment: 'api 名称'
  },
  api_path: {
    type: db.STRING(300),
    defaultValue: '',
    allowNull: false,
    comment: 'api 路径'
  },
  api_function: {
    type: db.STRING(100),
    unique: true,
    allowNull: false,
    comment: 'api 唯一名称'
  },
  auth_flag: {
    type: db.STRING(2),
    defaultValue: GLBConfig.AUTH,
    comment: '是否需要授权 1需要 0不需要'
  },
  show_flag: {
    type: db.STRING(2),
    defaultValue: GLBConfig.TRUE,
    comment: '是否显示 1需要 0不需要'
  }
})

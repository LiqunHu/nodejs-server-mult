/* 权限组表 */
const db = require('../../app/db')

module.exports = db.defineModel('tbl_common_usergroup', {
  usergroup_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  usergroup_type: {
    type: db.STRING(3),
    defaultValue: '',
    allowNull: false,
    comment: '组类型'
  },
  usergroup_code: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '组唯一标识'
  },
  usergroup_name: {
    type: db.STRING(50),
    defaultValue: '',
    allowNull: false,
    comment: '组名称'
  },
  node_type: {
    type: db.STRING(2),
    defaultValue: '',
    allowNull: false,
    comment: '节点类型 NODETYPEINFO'
  },
  parent_id: {
    type: db.ID,
    defaultValue: '',
    allowNull: false,
    comment: '父节点id 0为根节点'
  }
})

/* 系统功能表 */
const db = require('../../app/db')

module.exports = db.defineModel('tbl_common_systemmenu', {
  systemmenu_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  systemmenu_name: {
    type: db.STRING(300),
    allowNull: false,
    comment: '名称'
  },
  systemmenu_icon: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '图标'
  },
  systemmenu_index: {
    type: db.INTEGER,
    defaultValue: '0',
    allowNull: false,
    comment: '排序索引'
  },
  systemmenu_mobile_icon: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '移动端图标,有责有移动端功能'
  },
  systemmenu_mobile_backcolor: {
    type: db.STRING(100),
    defaultValue: '#FFFFFF',
    allowNull: false,
    comment: '移动端背景颜色'
  },
  api_id: {
    type: db.IDNO,
    allowNull: true,
    comment: '外键 tbl_common_api'
  },
  api_function: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: 'api名称'
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

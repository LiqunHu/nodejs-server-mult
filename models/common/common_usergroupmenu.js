/* 组权限明细表 */
const db = require('../../app/db')

module.exports = db.defineModel('tbl_common_usergroupmenu', {
  usergroupmenu_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  usergroup_id: {
    type: db.IDNO,
    allowNull: false,
    comment: '外键 tbl_common_usergroup'
  },
  systemmenu_id: {
    type: db.IDNO,
    allowNull: false,
    comment: '外键 tbl_common_systemmenu'
  }
})

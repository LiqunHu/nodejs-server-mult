const db = require('../../app/db')

module.exports = db.defineModel('tbl_mapbase_terminals', {
  mapbase_terminals_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  mapbase_ports_id: {
    type: db.IDNO,
    comment: '所属港口主键'
  },
  mapbase_terminals_longitude: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '码头经度'
  },
  mapbase_terminals_latitude: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '码头维度'
  },
  mapbase_terminals_area: {
    type: db.STRING(2000),
    defaultValue: '',
    allowNull: false,
    comment: '码头区域坐标集合'
  },
  mapbase_terminals_name: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '码头名称'
  },
  mapbase_terminals_name_cn: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '码头中文名称'
  },
  mapbase_terminals_name_en: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '码头英文名称'
  },
})

const db = require('../../app/db')

module.exports = db.defineModel('tbl_mapbase_berths', {
  mapbase_berths_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  mapbase_terminals_id: {
    type: db.IDNO,
    comment: '所属码头主键'
  },
  mapbase_berths_longitude: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '泊位经度'
  },
  mapbase_berths_latitude: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '泊位经度'
  },
  mapbase_berths_name: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '泊位名称'
  },
  mapbase_berths_name_cn: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '泊位中文名称'
  },
  mapbase_berths_name_en: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '泊位英文名称'
  },
})

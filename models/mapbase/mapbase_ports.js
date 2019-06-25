const db = require('../../app/db')

module.exports = db.defineModel('tbl_mapbase_ports', {
  mapbase_ports_id: {
    type: db.IDNO,
    autoIncrement: true,
    primaryKey: true,
    comment: '主键'
  },
  mapbase_ports_longitude: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '港口经度'
  },
  mapbase_ports_latitude: {
    type: db.STRING(20),
    defaultValue: '',
    allowNull: false,
    comment: '港口维度'
  },
  mapbase_ports_area: {
    type: db.STRING(2000),
    defaultValue: '',
    allowNull: false,
    comment: '港口区域坐标集合'
  },
  mapbase_ports_name: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '港口名称'
  },
  mapbase_ports_name_cn: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '港口中文名称'
  },
  mapbase_ports_name_en: {
    type: db.STRING(100),
    defaultValue: '',
    allowNull: false,
    comment: '港口英文名称'
  },
})

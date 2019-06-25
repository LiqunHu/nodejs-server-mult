const common = require('../../util/CommonUtil')
const logger = require('../../app/logger').createLogger(__filename)
const GLBConfig = require('../../util/GLBConfig')
const model = require('../../app/model')

// tables
const tb_ports = model.mapbase_ports
const tb_terminals = model.mapbase_terminals
const tb_berths = model.mapbase_berths

exports.getShowDataAct = async () => {
  let returnData = {}
  logger.info('start')
  let ports = await tb_ports.findAll({
    where: {
      state: GLBConfig.ENABLE
    }
  })

  let terminals = await tb_terminals.findAll({
    where: {
      state: GLBConfig.ENABLE
    }
  })

  let berths = await tb_berths.findAll({
    where: {
      state: GLBConfig.ENABLE
    }
  })

  returnData.ports = ports.map(row => {
    return {
      mapbase_ports_id: row.mapbase_ports_id,
      mapbase_ports_longitude: row.mapbase_ports_longitude,
      mapbase_ports_latitude: row.mapbase_ports_latitude,
      pointLayer: '',
      mapbase_ports_area: JSON.parse(row.mapbase_ports_area),
      areaLayer: '',
      mapbase_ports_name: row.mapbase_ports_name
    }
  })

  returnData.terminals = terminals.map(row => {
    return {
      mapbase_terminals_id: row.mapbase_terminals_id,
      mapbase_terminals_longitude: row.mapbase_terminals_longitude,
      mapbase_terminals_latitude: row.mapbase_terminals_latitude,
      pointLayer: '',
      mapbase_terminals_area: JSON.parse(row.mapbase_terminals_area),
      areaLayer: '',
      mapbase_terminals_name: row.mapbase_terminals_name
    }
  })

  returnData.berths = berths.map(row => {
    return {
      mapbase_berths_id: row.mapbase_berths_id,
      mapbase_berths_longitude: row.mapbase_berths_longitude,
      mapbase_berths_latitude: row.mapbase_berths_latitude,
      pointLayer: '',
      mapbase_berths_name: row.mapbase_berths_name
    }
  })

  return common.success(returnData)
}

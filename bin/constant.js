module.exports.COLORS = 'colors' // 选填
module.exports.DIR_PATH = 'dirPath' // 必填
module.exports.GENERATE = 'generate' // 必填 生成地址
module.exports.UNIT = 'unit' // 选填 单位
// 以下是项目配置 不从配置文件读
module.exports.EXT_NAME = 'extName'
module.exports.GLOB_REG = 'globReg'

// 以下是枚举

const JUSTIFY_CONTENT_ENMU = ['center', 'start', 'end', 'flex-start', 'flex-end', 'left', 'right', 'space-between', 'space-around', 'space-evenly', 'stretch', 'inherit', 'initial', 'unset', 'normal']
const ALIGN_ITEMS_ENMU = ['baseline', 'center', 'end', 'flex-end', 'flex-start', 'inherit', 'initial', 'normal', 'self-end', 'self-start', 'start', 'stretch', 'unset']

const CURSOR_ENMU = ['auto', 'default', 'none', 'context-menu', 'help', 'pointer', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'e-resize', 'n-resize', 'ne-resize', 'nw-resize', 's-resize', 'se-resize', 'sw-resize', 'w-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out', 'grab', 'grabbing']

const UNIT_ENMU = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'p']

module.exports.JUSTIFY_CONTENT_ENMU_STR = JUSTIFY_CONTENT_ENMU.join('|')
module.exports.ALIGN_ITEMS_ENMU_STR = ALIGN_ITEMS_ENMU.join('|')
module.exports.CURSOR_ENMU_STR = CURSOR_ENMU.join('|')
module.exports.UNIT_ENMU_STR = UNIT_ENMU.join('|')

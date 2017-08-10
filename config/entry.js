/**
 * 自动获取入口配置
 */
const utils = require('./utils');
const path = require('path');
// 入口路径
const ENT_PATH = path.resolve(__dirname, '../src/entries');
// 获取默认入口配置
const entry = utils.getEntrys(ENT_PATH);
// 加入打包稳定的框架/库
entry.lib = ['react', 'react-dom', 'react-router'];

module.exports = entry;

/**
 * 公用构建配置
 * 当添加新页面是在这里添加入口
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 目录
const ROOT_PATH = path.resolve(__dirname, '..'); // 项目根目录
const SRC_PATH = path.join(ROOT_PATH, 'src'); // 源码目录
// 网站信息
const info = require('./info');

const utils = require('./utils');
// 入口路径
const ENT_PATH = path.resolve(__dirname, '../src/entries');
// 获取默认入口配置
const entryFiles = utils.getEntrys(ENT_PATH);
var htmlPlugin=[];
for(var key in entryFiles){
    var htmlConfig=new HtmlWebpackPlugin({
                        title:info[key] ? info[key].title : info.app.title,
                        description:info[key] ? info[key].description : info.app.description,
                        keywords:info[key] ? info[key].keywords :  info.app.keywords,
                        template: path.join(SRC_PATH, 'entries/app.html'),
                        filename: key==='app' ? 'index.html' : key+'/index.html', // 生成的html文件
                        chunks: [key, 'lib'],
                        favicon: path.join(SRC_PATH, 'assets/favicon.png')
                    });
    htmlPlugin.push(htmlConfig);
}

module.exports=htmlPlugin;

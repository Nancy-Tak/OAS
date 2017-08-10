/**
 * 第三方 NPM 包（dll）构建配置
 */
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common'); // 公用配置
const ROOT_PATH = commonConfig.root; // 项目根目录

module.exports = {
  entry: {
    lib: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.join(ROOT_PATH, 'lib_bundle'),
    filename: '[name].js',
    library: '[name]' // 定义全局变量 window.${output.library}，即 window.lib
  },
  plugins: [
    new webpack.DllPlugin({
      context: ROOT_PATH,
      path: path.join(ROOT_PATH, 'lib_bundle', 'manifest.json'), // 定义 manifest 文件生成的位置
      name: '[name]' // dll bundle 输出的全局变量名称
    }),
    new webpack.DefinePlugin({
      'process.env': { // React/Redux打包常用
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
/**
 * 其它入口文件
 */
import React from 'react';
import ReactDom from 'react-dom';

// 导入公共样式
// import 'ASSETS/less/common.less';
// import 'ASSETS/css/style.css';

// 导入路由配置
import routes from '../routes/other';

// 渲染页面
ReactDom.render(routes, document.getElementById('root'));

/**
 * 首页
 */
// react 相关库
import React from 'react';
import ReactDOM from 'react-dom';

// antd 组件
//import { DatePicker, message } from 'antd';

// 页面组件（导出）
export default class ChannelManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  render() {
    return (
      <div>
        渠道管理
      </div>
    );
  }
}

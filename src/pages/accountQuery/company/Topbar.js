/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Select, Button, Icon, Input} from 'antd';
const Option = Select.Option;
import SearchInput from '../../Layouts/Common/searchInput'

export default class Topbar extends React.Component {
    constructor(props) {
        super(props)
    }

    //下拉选择器
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <h2 className="clearfix">
                <div className="pull-left">
                    个人账户列表
                </div>
                <div className="pull-right">
                    <Select className="fn-ml-10" defaultValue="lucy" style={{
                        width: 120
                    }} onChange={this.handleChange.bind(this)}>
                        <Option value="jack">归属渠道（全部）</Option>
                        <Option value="lucy">高德置地</Option>
                        <Option value="yiminghe">百事事业</Option>
                        <Option value="yiminghe1">唯品会</Option>
                    </Select>
                    <span className="fn-ml-10">
                        <SearchInput placeholder="请输入账户功能名称或者ID" onSearch={value => console.log(value)} style={{
                            width: 200
                        }}/>
                    </span>
                    <Button type="" className="fn-ml-10">
                        <Icon type="retweet"/>
                        刷新
                    </Button>
                </div>
            </h2>
        );
    }
}

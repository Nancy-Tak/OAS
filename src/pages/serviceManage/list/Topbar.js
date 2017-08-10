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
                    服务列表
                </div>
                <div className="pull-right">
                    <Select className="fn-ml-10" defaultValue="lucy" style={{
                        width: 120
                    }} onChange={this.handleChange.bind(this)}>
                        <Option value="jack">全部服务类型</Option>
                        <Option value="lucy">自有开发服务</Option>
                        <Option value="yiminghe">第三方开发服务</Option>
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

                    <Link to="/serviceManage/guide/EditorSteps1" className="ant-btn ant-btn-primary fn-ml-10">
                        <Icon type="plus"/>
                        接入服务
                    </Link>

                </div>
            </h2>
        );
    }
}

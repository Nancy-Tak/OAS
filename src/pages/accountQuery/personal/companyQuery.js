/**
 * 首页
 */

// 样式
import './style.less';
// react 相关库
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

// antd 组件
import {
    Breadcrumb,
    Table,
    Switch,
    Button,
    Select,
    Icon
} from 'antd';

//相关功能
import Topbar from './Topbar'
//表格
import OASTable from './OASTable'

// 页面组件（导出）
export default class CompanyQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }
    render() {

        return (
            <div className="fn-pa-20">
                <div className="panel">
                    {/*面包屑*/}
                    <Breadcrumb>
                        <Breadcrumb.Item>账户查询</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/AccountQuery/personal">账户查询企业</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="fn-ptb-20">
                        {/*相关操作*/}
                        <Topbar/> {/*表格*/}
                        <OASTable/>
                    </div>

                </div>
            </div>
        );
    }
}

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
    Button,
    Row,
    Col,
    Input,
    Checkbox,
    Breadcrumb
} from 'antd';

// 页面组件（导出）
export default class RoleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }
    render() {

        return (
            <div className="fn-pa-20">

                {/*面包屑*/}
                <Breadcrumb>
                    <Breadcrumb.Item>系统管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/SystemManage/role">角色管理</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        编辑角色
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="fn-pa-20">

                    <div >
                        <h2 className="fn-ptb-20">编辑角色</h2>

                        <div className="fn-ptb-20">
                            <Row className="fn-pt-20">
                                <Col span={6}>角色名称</Col>
                                <Col span={18}><Input placeholder="角色名称"/></Col>
                            </Row>
                            <Row className="fn-pt-20">
                                <Col span={6}>角色描述</Col>
                                <Col span={18}><Input type="textarea" rows={4}/></Col>
                            </Row>

                            <Row className="fn-pt-20">
                                <Col span={6}>用户权限设置</Col>
                                <Col span={18}>

                                    <div className="ant-spin-container">
                                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">

                                            <div className="ant-table-content">
                                                <div className="ant-table-body">
                                                    <table>
                                                        <thead className="ant-table-thead">
                                                            <tr>
                                                                <th colSpan={2}>
                                                                    <Checkbox>账户功能管理</Checkbox>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="ant-table-tbody">
                                                            <tr>
                                                                <td rowSpan={2}>
                                                                    <Checkbox>账户功能列表</Checkbox>
                                                                </td>
                                                                <td>
                                                                    <Checkbox>启用/禁用</Checkbox>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <Checkbox>管理</Checkbox>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                            <Row className="fn-pt-20">
                                <Col span={6}></Col>
                                <Col span={18}>
                                    <a href="javascript:;" className="ant-btn ant-btn-primary fn-mr-20">完成</a>
                                    <Link to="/SystemManage/role">取消</Link>
                                </Col>
                            </Row>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

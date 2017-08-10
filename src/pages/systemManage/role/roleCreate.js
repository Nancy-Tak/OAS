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

//  业务组件
import RightTable from 'BCOM/role_management/rightTable';

// 页面组件（导出）
export default class RoleCreate extends React.Component {
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
                        创建角色
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="fn-pa-20">

                    <div >
                        <h2 className="fn-ptb-20">创建角色</h2>

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

                                    <RightTable></RightTable>

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

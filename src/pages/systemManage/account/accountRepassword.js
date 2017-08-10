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
    Select,
    Breadcrumb
} from 'antd';
const Option = Select.Option;

// 页面组件（导出）
export default class AccountRepassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {

        return (
            <div className="fn-pa-20">

                {/*面包屑*/}
                <Breadcrumb>
                    <Breadcrumb.Item>系统管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/SystemManage/account">账户管理</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        重置账户密码
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div >
                    <h2 className="fn-ptb-20">重置账户密码</h2>

                    <div className="fn-ptb-20">
                        <Row className="fn-pt-20">
                            <Col span={6}>账户名称</Col>
                            <Col span={18}>xxxx</Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>新密码</Col>
                            <Col span={18}><Input placeholder="新密码"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>再次确认新密码</Col>
                            <Col span={18}><Input placeholder=" 再次确认新密码"/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <a href="javascript:;" className="ant-btn ant-btn-primary fn-mr-20">完成</a>
                                <Link to="/SystemManage/account">取消</Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

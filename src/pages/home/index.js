/**
 * 首页
 */
// react 相关库
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

// antd 组件
import {
    DatePicker,
    message,
    Row,
    Col,
    Checkbox,
    Button,
    Input,
    Breadcrumb,
    Badge
} from 'antd';

// 页面组件（导出）
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }
    render() {
        return (
            <div className="fn-pa-20">
                <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/home">登录</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div >
                    <h2 className="fn-ptb-20">添加基本信息</h2>

                    <div className="fn-ptb-20">
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                <span style={{
                                    marginRight: "10px"
                                }}>
                                    <Badge dot/>
                                </span>
                                账号名称
                            </Col>
                            <Col span={18}><Input placeholder="账号名称"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                <span style={{
                                    marginRight: "10px"
                                }}>
                                    <Badge dot/>
                                </span>
                                登录密码
                            </Col>
                            <Col span={18}><Input placeholder="登录密码"/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <Button className="ant-btn ant-btn-primary">登录</Button>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <Checkbox>记住登录名</Checkbox>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

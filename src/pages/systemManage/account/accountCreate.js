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
export default class AccountCreate extends React.Component {
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
                        创建账户
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div >
                    <h2 className="fn-ptb-20">创建账户</h2>

                    <div className="fn-ptb-20">
                        <Row className="fn-pt-20">
                            <Col span={6}>账户名称</Col>
                            <Col span={18}><Input placeholder="账户名称"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>姓名</Col>
                            <Col span={18}><Input placeholder="姓名"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>联系电话</Col>
                            <Col span={18}><Input placeholder="联系电话"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>邮箱</Col>
                            <Col span={18}><Input placeholder="邮箱"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>账户角色</Col>
                            <Col span={18}>
                                <Select defaultValue="lucy" style={{
                                    width: 120
                                }} onChange={this.handleChange.bind(this)}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>备注</Col>
                            <Col span={18}>
                                <Input type="textarea" rows={4}/>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <a href="javascript:;" className="ant-btn ant-btn-primary fn-mr-20">提交</a>
                                <Link to="/SystemManage/account">取消</Link>
                            </Col>
                        </Row>

                    </div>
                </div>

            </div>
        );
    }
}

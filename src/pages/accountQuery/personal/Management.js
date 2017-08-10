/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {
    Steps,
    Row,
    Col,
    Input,
    Upload,
    message,
    Button,
    Icon,
    Checkbox
} from 'antd';
const Step = Steps.Step;

export default class Management extends React.Component {
    constructor(props) {
        super(props)
    }
    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    render() {
        return (

            <div className="fn-pa-20">
                <h2 className="fn-ptb-20">功能管理</h2>

                <div className="fn-ptb-20">
                    <Row className="fn-pt-20">
                        <Col span={6}>功能名称</Col>
                        <Col span={18}>提交用户信息</Col>
                    </Row>
                    <Row className="fn-pt-20">
                        <Col span={6}>接口编码</Col>
                        <Col span={18}>1001</Col>
                    </Row>
                    <Row className="fn-pt-20">
                        <Col span={6}>功能简介</Col>
                        <Col span={18}><Input type="textarea" rows={4}/></Col>
                    </Row>
                    <Row className="fn-pt-20">
                        <Col span={6}>输入字段</Col>
                        <Col span={18}>
                            <div>
                                <div className="ant-spin-container">
                                    <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                                        <div className="ant-table-content">
                                            <div className="ant-table-body">
                                                <table>
                                                    <thead className="ant-table-thead">
                                                        <tr>
                                                            <th>基础信息</th>
                                                            <th>必填</th>
                                                            <th>备注</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="ant-table-tbody">
                                                        <tr>
                                                            <td>接口编号1</td>
                                                            <td>
                                                                <Checkbox onChange={this.onChange.bind(this)}>Checkbox1</Checkbox>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>接口编号2</td>
                                                            <td>
                                                                <Checkbox onChange={this.onChange.bind(this)}>Checkbox2</Checkbox>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>接口编号3</td>
                                                            <td>
                                                                <Checkbox onChange={this.onChange.bind(this)}>Checkbox3</Checkbox>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="fn-pt-20">
                        <Col span={6}></Col>
                        <Col span={18}>
                            <a href="javascript:;" className="ant-btn ant-btn-primary fn-mr-20">提交</a>
                            <Link to="/accountFunction">取消</Link>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

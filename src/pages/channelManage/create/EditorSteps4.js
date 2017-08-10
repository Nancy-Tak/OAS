/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Button, Steps, Row, Col, Alert} from 'antd';
const Step = Steps.Step;

export default class EditorSteps4 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="fn-pa-20">
                <h2 className="fn-ptb-20">编辑渠道完成</h2>

                <div className="fn-ptb-20">
                    <Steps current={3}>
                        <Step title="基础信息"/>
                        <Step title="接入方式"/>
                        <Step title="集成服务"/>
                        <Step title="编辑完成"/>
                    </Steps>
                </div>

                <div >
                    <div className="fn-ptb-20">
                        <Row>
                            <Col span={4} offset={10}>
                                <Alert message="编辑完成" description="编辑服务成功！" type="success" showIcon/>
                            </Col>
                        </Row>

                        <Row className="fn-pt-20 text-center">
                            <Col span={24}>
                                <Link to="/serviceManage/list" className="ant-btn ant-btn-primary ">返回服务列表</Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

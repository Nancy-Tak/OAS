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
    Alert
} from 'antd';
const Step = Steps.Step;

export default class EditorSteps3 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="fn-pa-20">
                <h2 className="fn-ptb-20">服务名称XXXX</h2>

                <div className="fn-ptb-20">
                    <Steps current={2}>
                        <Step title="基础信息"/>
                        <Step title="开发信息"/>
                        <Step title="接入完成"/>
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

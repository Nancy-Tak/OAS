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

export default class EditorSteps2 extends React.Component {
    constructor(props) {
        super(props)
    }
    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
        const props = {
            name: 'file',
            action: '/upload.do',
            headers: {
                authorization: 'authorization-text'
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            }
        };
        return (
            <div className="fn-pa-20">
                <h2 className="fn-ptb-20">服务名称XXXX</h2>

                <div className="fn-ptb-20">
                    <Steps current={1}>
                        <Step title="基础信息"/>
                        <Step title="开发信息"/>
                        <Step title="接入完成"/>
                    </Steps>
                </div>

                <div >
                    <h2 className="fn-ptb-20">编辑开发信息</h2>

                    <div className="fn-ptb-20">
                        <Row className="fn-pt-20">
                            <Col span={6}>接入方式</Col>
                            <Col span={18}>
                                <Checkbox onChange={this.onChange.bind(this)}>API</Checkbox>
                                <Checkbox defaultChecked={false} disabled>WEB页面</Checkbox>
                                <Checkbox defaultChecked={false} disabled>移动H5页面</Checkbox>
                                <Checkbox defaultChecked={false} disabled>移动客户端</Checkbox>
                            </Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>跳转页面URL</Col>
                            <Col span={18}>
                                <Input placeholder="跳转页面URL" size="large"/>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>服务器接口URL</Col>
                            <Col span={18}>
                                <Input placeholder="服务器接口URL" size="large"/>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>超时登录回调URL</Col>
                            <Col span={18}>
                                <Input placeholder="超时登录回调URL" size="large"/>
                            </Col>
                        </Row>

                        <Row className="fn-ptb-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <Link to="/serviceManage/guide/EditorSteps3" className="ant-btn ant-btn-primary">下一步</Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

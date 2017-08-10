/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {
    Button,
    Steps,
    Checkbox,
    Row,
    Col,
    Input,
    Upload,
    message,
    Icon
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
                        <Step title="接入方式"/>
                        <Step title="集成服务"/>
                        <Step title="编辑完成"/>
                    </Steps>
                </div>

                <div >
                    <h2 className="fn-ptb-20">编辑接入方式</h2>

                    <div className="fn-ptb-20">

                        <Row className="fn-pt-20">
                            <Col span={6}>证件类型</Col>
                            <Col span={18}>
                                <Checkbox onChange={this.onChange.bind(this)}>API</Checkbox>
                                <Checkbox onChange={this.onChange.bind(this)}>WEB页面</Checkbox>
                                <Checkbox onChange={this.onChange.bind(this)}>移动H5页面</Checkbox>
                                <Checkbox onChange={this.onChange.bind(this)}>移动客户端</Checkbox>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>跳转页面URL</Col>
                            <Col span={18}><Input placeholder="跳转页面URL"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                服务器接口URL</Col>
                            <Col span={18}><Input placeholder=" 服务器接口URL"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>超时登录回调URL</Col>
                            <Col span={18}><Input placeholder="超时登录回调URL"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>公钥附件</Col>
                            <Col span={18}>
                                <Upload {...props}>
                                    <Button type="ghost">
                                        <Icon type="upload"/>
                                        Click to Upload
                                    </Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <Link to="/channelManage/create/EditorSteps3" className="ant-btn ant-btn-primary fn-mr-20">下一步</Link>
                                <Link to="/channelManage/create/EditorSteps1">取消</Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

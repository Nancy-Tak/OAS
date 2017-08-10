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
    Icon
} from 'antd';
const Step = Steps.Step;

export default class EditorSteps1 extends React.Component {
    constructor(props) {
        super(props)
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
                    <Steps current={0}>
                        <Step title="基础信息"/>
                        <Step title="开发信息"/>
                        <Step title="接入完成"/>
                    </Steps>
                </div>

                <div >
                    <h2 className="fn-ptb-20">添加基本信息</h2>

                    <div className="fn-ptb-20">
                        <Row className="fn-pt-20">
                            <Col span={6}>服务编号</Col>
                            <Col span={18}><Input placeholder="服务编号"/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>服务名称</Col>
                            <Col span={18}><Input placeholder="服务名称"/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>服务类型</Col>
                            <Col span={18}><Input placeholder="服务类型"/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>服务供应商</Col>
                            <Col span={18}><Input placeholder="服务供应商"/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>服务简介</Col>
                            <Col span={18}><Input type="textarea" rows={4}/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>服务Logo</Col>
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
                            <Col span={6}>服务编号</Col>
                            <Col span={18}>
                                支持jpg、jpeg、png、bmp、gif格式的图片，大小不超过2M
                            </Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <Link to="/serviceManage/guide/EditorSteps2" className="ant-btn ant-btn-primary">下一步</Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

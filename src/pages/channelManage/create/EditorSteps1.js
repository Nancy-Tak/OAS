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
    Row,
    Col,
    Input,
    Radio,
    Select,
    Upload,
    message,
    Icon
} from 'antd';
const Step = Steps.Step;
const RadioGroup = Radio.Group;
const Option = Select.Option;

export default class EditorSteps1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
    }
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
    }
    handleChange(value) {
        console.log(`selected ${value}`);
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
                        <Step title="接入方式"/>
                        <Step title="集成服务"/>
                        <Step title="编辑完成"/>
                    </Steps>
                </div>

                <div >
                    <h2 className="fn-ptb-20">添加基本信息</h2>

                    <div className="fn-ptb-20">
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                渠道编号</Col>
                            <Col span={18}><Input placeholder="渠道编号"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                渠道名称</Col>
                            <Col span={18}><Input placeholder="渠道名称"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                企业名称</Col>
                            <Col span={18}><Input placeholder="企业名称"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                企业法人</Col>
                            <Col span={18}><Input placeholder="企业法人"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                法人身份证号</Col>
                            <Col span={18}><Input placeholder="法人身份证号"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>联系人</Col>
                            <Col span={18}><Input placeholder="联系人"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>联系手机号</Col>
                            <Col span={18}><Input placeholder="联系手机号"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>联系邮箱</Col>
                            <Col span={18}><Input placeholder="联系邮箱"/></Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>所在省份</Col>
                            <Col span={18}>
                                <Select defaultValue="lucy" style={{
                                    width: 120
                                }} onChange={this.handleChange.bind(this)}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                所在城市</Col>
                            <Col span={18}>

                                <Select defaultValue="lucy" style={{
                                    width: 120
                                }} onChange={this.handleChange.bind(this)}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>
                                渠道类型</Col>
                            <Col span={18}>

                                <Select defaultValue="lucy" style={{
                                    width: 120
                                }} onChange={this.handleChange.bind(this)}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>Disabled</Option>
                                    <Option value="yiminghe">yiminghe</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className="fn-pt-20">
                            <Col span={6}>证件类型</Col>
                            <Col span={18}>
                                <RadioGroup onChange={this.onChange.bind(this)} value={this.state.value}>
                                    <Radio key="a" value={1}>普通营业执照</Radio>
                                    <Radio key="b" value={2}>社会信用证</Radio>
                                    <Radio key="c" value={3}>其他证件</Radio>
                                </RadioGroup>
                            </Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>
                                其他证件编号</Col>
                            <Col span={18}><Input placeholder=" 其他证件编号"/></Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}>
                                其他证件扫描件</Col>
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
                                <p>请上传证件清晰彩色扫描件或数码照</p>
                                <p>证件必须在有效期范围内</p>
                                <p>支持jpg、jpeg、png、bmp、gif格式的图片，大小不超过2M</p>
                            </Col>
                        </Row>

                        <Row className="fn-pt-20">
                            <Col span={6}></Col>
                            <Col span={18}>
                                <Link to="/channelManage/create/EditorSteps2" className="ant-btn ant-btn-primary fn-mr-20">下一步</Link>
                                <Link to="/channelManage/create/EditorSteps2">取消</Link>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

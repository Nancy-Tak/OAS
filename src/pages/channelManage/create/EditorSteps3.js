/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Button, Checkbox, Steps} from 'antd';
const Step = Steps.Step;

export default class EditorSteps3 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="fn-pa-20">
                <h2 className="fn-ptb-20">账户功能接口</h2>

                <div className="fn-ptb-20">
                    <Steps current={2}>
                        <Step title="基础信息"/>
                        <Step title="接入方式"/>
                        <Step title="集成服务"/>
                        <Step title="编辑完成"/>
                    </Steps>
                </div>

                {/*服务供应商：广东钱途互联商务服务有限公司*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox defaultChecked>服务供应商：广东钱途互联商务服务有限公司</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>
                                                    <Checkbox defaultChecked>E+账户</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox defaultChecked>融资标准版</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox defaultChecked>融票</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*服务供应商：广东钱途互联商务服务有限公司 end*/}

                {/*服务供应商：号百信息服务有限公司*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox defaultChecked disabled>服务供应商：号百信息服务有限公司</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox defaultChecked disabled>号码百事通</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*服务供应商：号百信息服务有限公司 end*/}

                {/*服务供应商：号百信息服务有限公司*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox defaultChecked>服务供应商：号百信息服务有限公司</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox defaultChecked>蝴蝶EIP系统</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*服务供应商：号百信息服务有限公司 end*/}

                <div className="fn-pa-20">
                    <Link to="/channelManage/create/EditorSteps4" className="ant-btn ant-btn-primary fn-mr-20">下一步</Link>
                    <Link to="/channelManage/create/EditorSteps1">取消</Link>
                </div>

            </div>
        );
    }
}

/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Button, Checkbox, Tooltip, Select, Breadcrumb} from 'antd';
const Option = Select.Option;

export default class DetailCompany extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div className="fn-pa-20">
                {/*面包屑*/}
                <Breadcrumb>
                    <Breadcrumb.Item>账户查询</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/AccountQuery/company">查看企业账户</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        企业详情
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2 className="fn-ptb-20">账户名称XXXX</h2>
                {/*企业注册*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    企业注册
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>账户类型</td>
                                                <td>企业</td>
                                                <td>登录名</td>
                                                <td>D887:YQGF</td>
                                            </tr>
                                            <tr>
                                                <td>昵称</td>
                                                <td>小粒粒</td>
                                                <td>注册时间</td>
                                                <td>
                                                    <span className="text-nowrap">2016-10-01</span>
                                                    <span className="text-nowrap fontcolor-vice">18:00:00</span>
                                                </td>
                                            </tr>

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*企业注册 end*/}

                {/*企业基本信息*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    企业基本信息
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <td>企业名称</td>
                                                <td>哎呀有钱股份有限公司</td>
                                                <td>企业编码</td>
                                                <td>53764765337657645</td>
                                            </tr>
                                            <tr>
                                                <td>企业证件类型</td>
                                                <td>普通营业执照</td>
                                                <td>企业证件号码</td>
                                                <td>53764765337657645</td>
                                            </tr>
                                            <tr>
                                                <td>联系手机号</td>
                                                <td>13800000000</td>
                                                <td>邮箱</td>
                                                <td>zhangsan@163.com</td>
                                            </tr>
                                            <tr>
                                                <td>企业类型</td>
                                                <td>民营企业</td>
                                                <td>营业执照有效期</td>
                                                <td>
                                                    <span className="text-nowrap">2016-10-01</span>至<span className="text-nowrap">2016-10-01</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>营业执照扫描件
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>组织机构代码
                                                </td>
                                                <td colSpan="3">
                                                    53764765337657645
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>组织机构代码证扫描件
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>税务登记证编号
                                                </td>
                                                <td colSpan="3">
                                                    53764765337657645
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>税务登记证扫描件
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>社会信用证代码
                                                </td>
                                                <td colSpan="3">
                                                    53764765337657645
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>社会信用证扫描件
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>银行开户许可证核准号
                                                </td>
                                                <td colSpan="3">
                                                    53764765337657645
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>银行开户许可证扫描件
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>财政登记证号
                                                </td>
                                                <td colSpan="3">
                                                    53764765337657645
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>财政登记证扫描件
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>其他证件号
                                                </td>
                                                <td colSpan="3">
                                                    53764765337657645
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>其他证件扫描件
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>企业征信查询授权书
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>企业章程
                                                </td>
                                                <td colSpan="3">
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>企业规模</td>
                                                <td>500-800人</td>
                                                <td>行业类型</td>
                                                <td>互联网</td>
                                            </tr>
                                            <tr>
                                                <td>主营业务</td>
                                                <td>互联网</td>
                                                <td>所在省份</td>
                                                <td>广东省</td>
                                            </tr>
                                            <tr>
                                                <td>所在地市</td>
                                                <td>深圳市</td>
                                                <td>联系地址</td>
                                                <td>罗湖区石化路100号24层</td>
                                            </tr>
                                            <tr>
                                                <td>投资规模</td>
                                                <td>5000万</td>
                                                <td>企业网站URL</td>
                                                <td>http://weibo.com/u/2518349655</td>
                                            </tr>
                                            <tr>
                                                <td>QQ号</td>
                                                <td>27658689</td>
                                                <td>微信号</td>
                                                <td>wwccvv</td>
                                            </tr>

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*企业基本信息 end*/}

                {/*实名认证 — 企业小额付款*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    实名认证 — 企业小额付款
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <td>认证结果</td>
                                                <td>通过</td>
                                                <td>企业账户名</td>
                                                <td>广东向日葵日化有限公司</td>
                                            </tr>
                                            <tr>
                                                <td>银行卡号</td>
                                                <td>622588888888888</td>
                                                <td>开户行</td>
                                                <td>招商银行</td>
                                            </tr>
                                            <tr>
                                                <td>省份</td>
                                                <td>广东省</td>
                                                <td>地市</td>
                                                <td>广州市</td>
                                            </tr>
                                            <tr>
                                                <td>分支行</td>
                                                <td>招商银行广州花城支行</td>
                                                <td>预留手机号</td>
                                                <td>13800000000</td>
                                            </tr>
                                            <tr>
                                                <td>认证时间</td>
                                                <td colSpan={3}>
                                                    <span className="text-nowrap">2016-10-01</span>
                                                    <span className="text-nowrap fontcolor-vice">18:00:00</span>
                                                </td>
                                            </tr>

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*实名认证 — 企业小额付款 end*/}

                {/*实名认证 — 企业小额收款*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    实名认证 — 企业小额收款
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <td>认证结果</td>
                                                <td>通过</td>
                                                <td>企业账户名</td>
                                                <td>广东向日葵日化有限公司</td>
                                            </tr>
                                            <tr>
                                                <td>银行卡号</td>
                                                <td>622588888888888</td>
                                                <td>开户行</td>
                                                <td>招商银行</td>
                                            </tr>
                                            <tr>
                                                <td>省份</td>
                                                <td>广东省</td>
                                                <td>地市</td>
                                                <td>广州市</td>
                                            </tr>
                                            <tr>
                                                <td>分支行</td>
                                                <td>招商银行广州花城支行</td>
                                                <td>认证时间</td>
                                                <td>
                                                    <span className="text-nowrap">2016-10-01</span>
                                                    <span className="text-nowrap fontcolor-vice">18:00:00</span>
                                                </td>
                                            </tr>

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*实名认证 — 企业小额收款 end*/}

                {/*实名认证 — 身份认证*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    实名认证 — 身份认证
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <th>认证结果</th>
                                                <td>通过</td>
                                                <th>真实姓名</th>
                                                <td>张力</td>
                                            </tr>
                                            <tr>
                                                <th>身份证号</th>
                                                <td>450000000000000000</td>
                                                <th>认证时间</th>
                                                <td>
                                                    <span className="text-nowrap">2016-10-01</span>
                                                    <span className="text-nowrap fontcolor-vice">18:00:00</span>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*实名认证 — 身份认证 end*/}

                {/*实名认证 — 个人银行卡认证*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    实名认证 — 个人银行卡认证
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <td>认证结果</td>
                                                <td>通过</td>
                                                <td>户名</td>
                                                <td>张力</td>
                                            </tr>
                                            <tr>
                                                <td>银行卡号</td>
                                                <td>622588888888888</td>
                                                <td>开户行</td>
                                                <td>招商银行</td>
                                            </tr>
                                            <tr>
                                                <td>省份</td>
                                                <td>广东省</td>
                                                <td>地市</td>
                                                <td>广州市</td>
                                            </tr>
                                            <tr>
                                                <td>分支行</td>
                                                <td>招商银行广州花城支行</td>
                                                <td>银行预留手机号</td>
                                                <td>13800000000</td>
                                            </tr>
                                            <tr>
                                                <td>认证时间</td>
                                                <td colSpan={3}>
                                                    <span className="text-nowrap">2016-10-01</span>
                                                    <span className="text-nowrap fontcolor-vice">18:00:00</span>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*实名认证 — 个人银行卡认证 end*/}

                {/*实名认证 — 绑定手机*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    实名认证 — 绑定手机
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>认证结果</td>
                                                <td>通过</td>
                                                <td>手机号</td>
                                                <td>13800000000</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={1}>认证时间</td>
                                                <td colSpan={3}>2016-10-01 18:00:00</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*实名认证 — 绑定手机 end*/}

                {/*实名认证 — 人脸认证*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    实名认证 — 人脸认证
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>认证结果</td>
                                                <td>通过</td>
                                                <td>真实姓名</td>
                                                <td>张力</td>
                                            </tr>
                                            <tr>
                                                <td>身份证号</td>
                                                <td>450000000000000000</td>
                                                <td>认证时间</td>
                                                <td>2016-10-01 18:00:00</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*实名认证 — 人脸认证 end*/}

                {/*安全信息 — 登录密码*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    安全信息 — 登录密码
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td colSpan={1}>登录密码</td>
                                                <td colSpan={3}>已设置</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*安全信息 — 登录密码 end*/}

                {/*安全信息 — 支付密码*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    安全信息 — 支付密码
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td colSpan={1}>交易密码</td>
                                                <td colSpan={3}>已设置</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*安全信息 — 支付密码 end*/}

                {/*关系人 超级管理员*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container" style={{
                        border: "1px solid #2b78ba"
                    }}>
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    关系人
                                                    <div className="pull-right">
                                                        <Select defaultValue="jack" style={{
                                                            width: 120
                                                        }} onChange={this.handleChange.bind(this)}>
                                                            <Option value="jack">全部关系人类型</Option>
                                                            <Option value="lucy">超级管理员</Option>
                                                            <Option value="yiminghe">经办人</Option>
                                                        </Select>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        {/*超级管理员*/}
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <td>关系人类型</td>
                                                <td colSpan={3}>
                                                    超级管理员
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>姓名</td>
                                                <td colSpan={3}>XXX</td>
                                            </tr>
                                            <tr>
                                                <td>证件类型</td>
                                                <td>身份证</td>
                                                <td>证件号码</td>
                                                <td>8878249070850892</td>
                                            </tr>
                                            <tr>
                                                <td>证件正面扫描件
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>证件背面扫描件
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>手机号
                                                </td>
                                                <td colSpan={3}>
                                                    XXXXXXXXXXXXX
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>固定电话号</td>
                                                <td>02088978983</td>
                                                <td>邮箱</td>
                                                <td>wll@163.com</td>
                                            </tr>
                                            <tr>
                                                <td>企业法定代表人身份证明书
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>个人征信查询授权书
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/*超级管理员 end*/}
                                    </table>

                                    {/*经办人*/}
                                    <table className="fn-mt-20">
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <td>关系人类型</td>
                                                <td colSpan={3}>
                                                    经办人
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>姓名</td>
                                                <td colSpan={3}>XXX</td>
                                            </tr>
                                            <tr>
                                                <td>证件类型</td>
                                                <td>身份证</td>
                                                <td>证件号码</td>
                                                <td>8878249070850892</td>
                                            </tr>
                                            <tr>
                                                <td>证件正面扫描件
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>证件背面扫描件
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>手机号
                                                </td>
                                                <td colSpan={3}>
                                                    XXXXXXXXXXXXX
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>固定电话号</td>
                                                <td>02088978983</td>
                                                <td>邮箱</td>
                                                <td>wll@163.com</td>
                                            </tr>
                                            <tr>
                                                <td>企业法定代表人身份证明书
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>个人征信查询授权书
                                                </td>
                                                <td colSpan={3}>
                                                    <a href="#" target="_blank">
                                                        <img src="#" alt=""/>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/*经办人 end*/}

                                    {/*联系人*/}
                                    <table className="fn-mt-20">
                                        <tbody className="ant-table-tbody">

                                            <tr>
                                                <td>关系人类型</td>
                                                <td colSpan={3}>
                                                    联系人
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>姓名</td>
                                                <td colSpan={3}>XXX<a href="账户查询-查看企业账户-账户详情-关系人认证信息.html" className="link-standard fn-ml-10">查看认证信息</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>证件类型</td>
                                                <td>身份证</td>
                                                <td>证件号码</td>
                                                <td>8878249070850892</td>
                                            </tr>
                                            <tr>
                                                <td>手机号
                                                </td>
                                                <td colSpan={3}>
                                                    XXXXXXXXXXXXX
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>是否开通服务权限</td>
                                                <td>开通</td>
                                                <td>开通服务权限</td>
                                                <td>E+账户，融票，仓单融资</td>
                                            </tr>
                                            <tr>
                                                <td>子登录名</td>
                                                <td>zyhh@zlhe</td>
                                                <td>备注</td>
                                                <td>一个好人</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/*联系人 end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*关系人 超级管理员 end*/}

                {/*开通服务*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    开通服务
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td colSpan={1}>广东钱途互联商务服务有限公司供应</td>
                                                <td colSpan={3}>E+账户，融票，应收账融资，订单融资，车险分期融资</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={1}>号百信息服务有限公司供应</td>
                                                <td colSpan={3}>号码百事通</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={1}>号百信息服务有限公司供应</td>
                                                <td colSpan={3}>蝴蝶EIP系统</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*开通服务 end*/}

                <div className="fn-pa-20">

                    <Link to="/accountQuery/company" className="ant-btn ant-btn-primary">返回个人账户列表</Link>
                </div>

            </div>
        );
    }
}

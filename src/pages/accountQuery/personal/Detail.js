/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Button, Checkbox, Tooltip, Breadcrumb} from 'antd';

export default class DetailPC extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="fn-pa-20">
                {/*面包屑*/}
                <Breadcrumb>
                    <Breadcrumb.Item>账户查询</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/AccountQuery/personal">查看个人账户</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        个人详情
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2 className="fn-ptb-20">账户名称XXXX</h2>
                {/*个人注册*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    个人注册
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>账户类型</td>
                                                <td>个人</td>
                                                <td>登录名</td>
                                                <td>gavf</td>
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
                {/*个人注册 end*/}

                {/*个人基本信息*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={4}>
                                                    个人基本信息
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>真实姓名</td>
                                                <td>张力</td>
                                                <td>证件类型</td>
                                                <td>身份证</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>证件正面扫描件</td>
                                                <td colSpan={2}><img src="#"/></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>证件背面扫描件</td>
                                                <td colSpan={2}><img src="#"/></td>
                                            </tr>

                                            <tr>
                                                <td>手机号</td>
                                                <td>13800000000</td>
                                                <td>固定电话号</td>
                                                <td>02081033789</td>
                                            </tr>
                                            <tr>
                                                <td>邮箱</td>
                                                <td>zhangli@163.com</td>
                                                <td>性别</td>
                                                <td>男</td>
                                            </tr>
                                            <tr>
                                                <td>出生日期</td>
                                                <td>2016-10-01</td>
                                                <td>学历</td>
                                                <td>本科</td>
                                            </tr>
                                            <tr>
                                                <td>职业</td>
                                                <td>教师</td>
                                                <td>所在省份</td>
                                                <td>广东省</td>
                                            </tr>
                                            <tr>
                                                <td>所在地市</td>
                                                <td>广州市</td>
                                                <td>个人博客URL</td>
                                                <td>
                                                    http://weibo.com/u/2518349655
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={1}>联系地址</td>
                                                <td colSpan={3}>XXX</td>
                                            </tr>

                                            <tr>
                                                <td>QQ号</td>
                                                <td>74298677</td>
                                                <td>微信号</td>
                                                <td>zhangsan</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*个人基本信息 end*/}

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
                                                <td>认证结果</td>
                                                <td>通过</td>
                                                <td>真实姓名</td>
                                                <td>张力</td>
                                            </tr>
                                            <tr>
                                                <td>身份证号</td>
                                                <td>450000000000000000</td>
                                                <td>认证时间</td>
                                                <td>
                                                    2016-10-01 18:00:00
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

                    <Link to="/accountQuery/personal" className="ant-btn ant-btn-primary">返回个人账户列表</Link>
                </div>

            </div>
        );
    }
}

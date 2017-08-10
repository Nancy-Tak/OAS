/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Table, Breadcrumb} from 'antd';

export default class View extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                render: text => <a href="#">{text}</a>
            }, {
                title: '资产',
                className: 'column-money',
                dataIndex: 'money'
            }, {
                title: '住址',
                dataIndex: 'address'
            }
        ];

        const data = [
            {
                key: '1',
                name: '胡彦斌',
                money: '￥300,000.00',
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                money: '￥1,256,000.00',
                address: '西湖区湖底公园1号'
            }, {
                key: '3',
                name: '李大嘴',
                money: '￥120,000.00',
                address: '西湖区湖底公园1号'
            }
        ];

        return (
            <div className="fn-pa-20">
                {/*面包屑*/}
                <Breadcrumb>
                    <Breadcrumb.Item>渠道管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/accountFunction">渠道列表</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        查看渠道
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h2>渠道名称XXXX</h2>

                {/* 基础信息 */}
                <div className="ant-spin-container fn-ptb-20">
                    <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">

                        <div className="ant-table-content">
                            <div className="ant-table-body">
                                <table>
                                    <thead className="ant-table-thead">
                                        <tr>
                                            <th colSpan={4}>
                                                基础信息
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="ant-table-tbody">
                                        <tr>
                                            <td>
                                                服务编号
                                            </td>
                                            <td>
                                                D888
                                            </td>
                                            <td>
                                                渠道名称
                                            </td>
                                            <td>
                                                哎呀有钱宝
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                企业名称
                                            </td>
                                            <td>
                                                哎呀有钱股份有限公司
                                            </td>
                                            <td>
                                                企业法人
                                            </td>
                                            <td>
                                                蔡蔓
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                法人身份证号
                                            </td>
                                            <td>
                                                450000000000000000
                                            </td>
                                            <td>
                                                联系人
                                            </td>
                                            <td>
                                                张琳琳
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                联系手机号
                                            </td>
                                            <td>
                                                13800000000
                                            </td>
                                            <td>
                                                联系邮箱
                                            </td>
                                            <td>
                                                123@gmail.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                所在省份
                                            </td>
                                            <td>
                                                广东省
                                            </td>
                                            <td>
                                                所在地市
                                            </td>
                                            <td>
                                                广州市
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                证件类型
                                            </td>
                                            <td colSpan={3}>
                                                普通营业执照
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                营业执照注册号
                                            </td>
                                            <td colSpan={3}>
                                                654236765365324373
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                营业执照扫描件
                                            </td>
                                            <td colSpan={3}>
                                                <img src="#"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                营业执照有效期
                                            </td>
                                            <td colSpan={3}>
                                                2010-07-08 至 2020-07-07
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                组织机构代码证
                                            </td>
                                            <td colSpan={3}>
                                                654236765365324373
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                组织机构代码证扫描件
                                            </td>
                                            <td colSpan={3}>
                                                <img src="#"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                税务登记证编号
                                            </td>
                                            <td colSpan={3}>
                                                654236765365324373
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                税务登记证扫描件
                                            </td>
                                            <td colSpan={3}>
                                                <img src="#"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                渠道类型
                                            </td>
                                            <td colSpan={3}>
                                                第三方开发渠道
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 基础信息 end */}

                {/* 接入方式 */}
                <div className="ant-spin-container fn-ptb-20">
                    <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">

                        <div className="ant-table-content">
                            <div className="ant-table-body">
                                <table>
                                    <thead className="ant-table-thead">
                                        <tr>
                                            <th colSpan={4}>
                                                接入方式
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="ant-table-tbody">
                                        <tr>
                                            <td>
                                                接入方式
                                            </td>
                                            <td>
                                                WEB页面
                                            </td>
                                            <td>
                                                渠道名称
                                            </td>
                                            <td>
                                                哎呀有钱宝
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                跳转页面URL
                                            </td>
                                            <td colSpan={3}>
                                                http://sd.china.com.cn/a/2016/xjoe_0901/686881.html
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                服务器接口URL
                                            </td>
                                            <td colSpan={3}>
                                                http://sd.china.com.cn/a/2016/xjoe_0901/686881.html
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                超时登录回调URL
                                            </td>
                                            <td colSpan={3}>
                                                http://sd.china.com.cn/a/2016/xjoe_0901/686881.html
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                公钥附件
                                            </td>
                                            <td colSpan={3}>
                                                aaaaaaaa.JKS
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 接入方式 end */}

                {/* 集成服务 */}
                <div className="ant-spin-container fn-ptb-20">
                    <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">

                        <div className="ant-table-content">
                            <div className="ant-table-body">
                                <table>
                                    <thead className="ant-table-thead">
                                        <tr>
                                            <th colSpan={4}>
                                                集成服务
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="ant-table-tbody">
                                        <tr>
                                            <td>
                                                广东钱途互联商务服务有限公司供应
                                            </td>
                                            <td>
                                                E+账户，融票，应收账融资，订单融资，车险分期融资
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                号百信息服务有限公司供应
                                            </td>
                                            <td>
                                                号码百事通
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                美兰达科技有限公司供应
                                            </td>
                                            <td>
                                                蝴蝶EIP系统
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 集成服务 end */}

                <Link to="/channelManage/list" className="ant-btn ant-btn-primary">渠道服务列表</Link>

            </div>
        );
    }
}

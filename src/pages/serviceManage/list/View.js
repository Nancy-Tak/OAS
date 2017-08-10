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
                    <Breadcrumb.Item>
                        服务管理
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/serviceManage/list">服务列表</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        查看服务
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h2>服务名称XXXX</h2>

                {/* antspincontainer */}
                <div className="ant-spin-container fn-ptb-20">
                    <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                        <div className="ant-table-title">基础信息</div>
                        <div className="ant-table-content">
                            <div className="ant-table-body">
                                <table>
                                    <tbody className="ant-table-tbody">
                                        <tr>
                                            <td>
                                                服务编号
                                            </td>
                                            <td>
                                                54625
                                            </td>
                                            <td>
                                                服务名称
                                            </td>
                                            <td>
                                                E+账户
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                服务类型
                                            </td>
                                            <td>
                                                自有开发服务
                                            </td>
                                            <td>
                                                服务供应商
                                            </td>
                                            <td>
                                                广东钱途互联商务服务有限公司
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                服务简介
                                            </td>
                                            <td colSpan={3}>
                                                支付，理财，充值，提现，一级棒钱包。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                服务Logo
                                            </td>
                                            <td colSpan={3}>
                                                <img src="#"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* antspincontainer end */}

                {/* antspincontainer */}
                <div className="ant-spin-container fn-ptb-20">
                    <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                        <div className="ant-table-title">开发信息</div>
                        <div className="ant-table-content">
                            <div className="ant-table-body">
                                <table>
                                    <tbody className="ant-table-tbody">
                                        <tr>
                                            <td>
                                                接入方式
                                            </td>
                                            <td>
                                                web页面
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                跳转页面URL
                                            </td>
                                            <td>
                                                http://sd.china.com.cn/a/2016/xjoe_0901/686881.html
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                服务器接口URL
                                            </td>
                                            <td>
                                                http://sd.china.com.cn/a/2016/xjoe_0901/686881.html
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                超时登录回调URL
                                            </td>
                                            <td>
                                                http://sd.china.com.cn/a/2016/xjoe_0901/686881.html
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* antspincontainer end */}

                <Link to="/serviceManage/list" className="ant-btn ant-btn-primary">返回服务列表</Link>

            </div>
        );
    }
}

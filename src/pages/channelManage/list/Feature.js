/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Button, Checkbox, Tooltip, Breadcrumb} from 'antd';

export default class Feature extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="fn-pa-20">
                {/*面包屑*/}
                <Breadcrumb>
                    <Breadcrumb.Item>渠道管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/accountFunction">渠道列表</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        功能渠道
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h2 className="fn-ptb-20">账户功能接口</h2>
                {/*用户信息管理接口*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox>注册登录接口</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>
                                                    <Checkbox>注册</Checkbox>
                                                    <Tooltip title="验证要素设置">
                                                        <Link to="/channelManage/list/regValida" className="link-standard icon-edit2 pull-right"></Link>
                                                    </Tooltip>
                                                </td>
                                                <td>
                                                    <Checkbox>登录</Checkbox>
                                                    <Tooltip title="验证要素设置">
                                                        <Link to="/channelManage/list/logValida" className="link-standard icon-edit2 pull-right"></Link>
                                                    </Tooltip>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox defaultChecked={false} disabled>修改注册信息</Checkbox>
                                                    <Tooltip title="验证要素设置">
                                                        <Link to="/channelManage/list/editorValida" className="link-standard icon-edit2 pull-right"></Link>

                                                    </Tooltip>
                                                    <a className="fontcolor-vice icon-edit2 pull-right"></a>
                                                </td>
                                                <td>
                                                    <Checkbox>查询注册信息</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox >登出</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                    <div className="fn-ptb-20">
                                        <Button type="primary" className="fn-mr-20">保存</Button>
                                        <Link to="/channelManage/list">取消</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*用户信息管理接口 end*/}
            </div>
        );
    }
}

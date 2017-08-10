/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Button, Checkbox, Tooltip} from 'antd';

//  自编组件
import ValidataTable  from './validateTable';

export default class RegValida extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableTitle : ['字段名称','显示','必填','备注'],
            items : [
                {
                    name : '账户类型',
                    display : {
                        checked : true,
                        disabled : true
                    },
                    required : {
                        checked : true,
                        disabled : true
                    },
                    remarks : ''
                },
                {
                    name : '登录密码',
                    display : {
                        checked : true,
                        disabled : true
                    },
                    required : {
                        checked : true,
                        disabled : true
                    },
                    remarks : ' 账户类型为个人'
                },
                {
                    name : '昵称',
                    display : {
                        checked : true,
                        disabled : true
                    },
                    required : {
                        checked : true,
                        disabled : true
                    },
                    remarks : ''
                },
                {
                    name : '真实姓名',
                    display : {
                        checked : false,
                        disabled : false
                    },
                    required : {
                        checked : false,
                        disabled : true
                    },
                    remarks : ''
                },
                {
                    name : '证件类型',
                    display : {
                        checked : false,
                        disabled : false
                    },
                    required : {
                        checked : false,
                        disabled : true
                    },
                    remarks : ''
                },
                {
                    name : '是否同意大账户服务协议',
                    display : {
                        checked : true,
                        disabled : true
                    },
                    required : {
                        checked : true,
                        disabled : true
                    },
                    remarks : ''
                }
            ]
        }
    }
    render() {
        return (
            <div className="fn-pa-20">
                <h2 className="fn-ptb-20">注册验证要素设置</h2>
                {/*用户信息管理接口*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <ValidataTable titles={ this.state.tableTitle} items={ this.state.items }/>
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

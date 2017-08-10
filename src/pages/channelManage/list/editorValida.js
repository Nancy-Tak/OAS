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

export default class editorValida extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableTitle : ['字段名称','显示','必填','备注'],
            items : [
                {
                    name : '登录名',
                    display : {
                        checked : true,
                        disabled : true
                    },
                    required : {
                        checked : true,
                        disabled : true
                    },
                    remarks : '不可更改'
                },
                {
                    name : '昵称',
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
                    name : '证件号码',
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
                    name : '手机号',
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
                    name : '邮箱',
                    display : {
                        checked : false,
                        disabled : false
                    },
                    required : {
                        checked : false,
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
                <h2 className="fn-ptb-20">修改注册信息验证要素设置</h2>
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

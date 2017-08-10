/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Table, Switch, Button} from 'antd';

export default class OASTable extends React.Component {
    constructor(props) {
        super(props)
    }

    //下拉选择器
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        //表格
        const columns = [
            {
                title: '渠道编号',
                dataIndex: 'key'
            }, {
                title: '渠道名称',
                dataIndex: 'type'
            }, {
                title: '接入方式',
                dataIndex: 'name'
            }, {
                title: '集成服务',
                dataIndex: 'introduction'
            }, {
                title: '创建时间',
                dataIndex: 'creationTime'
            }, {
                title: '状态',
                dataIndex: '',
                render: () => {
                    return (<Switch checkedChildren={'开'} unCheckedChildren={'关'}/>)
                }
            }, {
                title: '操作',
                dataIndex: '',
                render: () => {
                    return (
                        <div>
                            <Link to="/channelManage/list/View" className="ant-btn fn-ml-10">查看</Link>
                            <Link to="/channelManage/create/EditorSteps1" className="ant-btn fn-ml-10">编辑</Link>
                            <Link to="/channelManage/list/Feature" className="ant-btn fn-ml-10">功能</Link>
                        </div>
                    )
                }
            }
        ];
        const data = [
            {
                key: 'D888',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '2',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '3',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '4',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '5',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '6',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '7',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '8',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '9',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '10',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '11',
                type: '广东开星影视公司',
                name: "web页面",
                introduction: 'E+账户，融票',
                creationTime: "2016-08-08 12:00:00"
            }
        ];
        const pagination = {
            total: data.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current);
            }
        };

        return (<Table columns={columns} dataSource={data} pagination={pagination}/>);
    }
}

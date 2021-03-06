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
                title: '接口编码',
                dataIndex: 'key'
            }, {
                title: '功能类型',
                dataIndex: 'type'
            }, {
                title: '账户功能名称',
                dataIndex: 'name'
            }, {
                title: '账户功能简介',
                dataIndex: 'introduction'
            }, {
                title: '包含字段数量',
                dataIndex: 'stringNum'
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
                        <Link to="/accountFunction/list/Management" className="ant-btn">管理</Link>
                    )
                }
            }
        ];
        const data = [
            {
                key: '1',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '2',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '3',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '4',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '5',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '6',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '7',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '8',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '9',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '10',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
                creationTime: "2016-08-08 12:00:00"
            }, {
                key: '11',
                type: '关系人管理接口',
                name: "删除关系人",
                introduction: '如填写则显示，未填写则为空',
                stringNum: "10",
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

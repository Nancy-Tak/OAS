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
                title: '角色名称',
                dataIndex: 'key'
            }, {
                title: '角色描述',
                dataIndex: 'type'
            }, {
                title: '创建时间',
                dataIndex: 'creationTime'
            }, {
                title: '备注',
                dataIndex: 'note'
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
                            <Link to="/systemManage/role/roleView" className="ant-btn fn-ml-10">查看</Link>
                            <Link to="/systemManage/role/roleEditor" className="ant-btn fn-ml-10">编辑</Link>
                        </div>
                    )
                }
            }
        ];
        const data = [
            {
                key: '运营1',
                type: '描述',
                creationTime: "2016-08-08 12:00:00",
                note: "备注"
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

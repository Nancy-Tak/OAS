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
    serviceManageView() {
        alert("1")
    }
    render() {
        //表格
        const columns = [
            {
                title: '服务编号',
                dataIndex: 'key'
            }, {
                title: '服务名称',
                dataIndex: 'type'
            }, {
                title: '服务类型',
                dataIndex: 'name'
            }, {
                title: '服务供应商',
                dataIndex: 'introduction'
            }, {
                title: '接入方式',
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
                        <div>
                            <Button type="" className="fn-ml-10">
                                <Link to="/serviceManage/list/View">查看</Link>
                            </Button>
                            <Button type="" className="fn-ml-10">
                                <Link to="serviceManage/guide/EditorSteps1">编辑</Link>
                            </Button>
                            <Button type="" className="fn-ml-10">
                                <Link to="serviceManage/list/Feature">管理</Link>
                            </Button>
                        </div>
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

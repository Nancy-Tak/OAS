/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

// antd 组件
import {Checkbox, Breadcrumb} from 'antd';

export default class Feature extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    index: 0,
                    text: "查询接入渠道",
                    isDone: false
                }, {
                    index: 1,
                    text: "查询渠道企业信息",
                    isDone: false
                }, {
                    index: 2,
                    text: "统一对外接口",
                    isDone: false
                }
            ]
        }
    }
    onCheckAllChange() {
        let isAllChecked = false;
        console.log(this.state.todos)
        if (this.state.todos.every((todo) => todo.isDone)) {
            isAllChecked = true;
        }
        this.setState({todos: this.state.todos, isAllChecked});
    }
    // 改变任务状态，传递给TodoItem和Footer组件的方法
    changeTodoState(index, isDone, isChangeAll = false) {
        console.log(index)
        if (isChangeAll) {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            })
        } else {
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
        //this.db.set('todos', this.state.todos);
    }
    allChecked() {
        //console.log(this.state.todos.splice(2))
        let isAllChecked = false;
        //console.log(this.state.todos)
        if (this.state.todos.every((todo) => todo.isDone)) {
            isAllChecked = true;
        }
        this.setState({todos: this.state.todos, isAllChecked});
    }

    render() {

        return (
            <div className="fn-pa-20">

                {/*测试*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    {/*
                                                        <Checkbox checked={this.state.isAllChecked} onChange={this.onCheckAllChange.bind(this)} changeTodoState={this.changeTodoState.bind(this)}>
                                                        测试 all
                                                        </Checkbox>
                                                    */}
                                                    <CheckboxChildAll isAllChecked={this.state.isAllChecked} changeTodoState={this.changeTodoState.bind(this)}/>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            {/*
                                                <tr>
                                                <td>
                                                <CheckboxChild key={0} todo={this.state.todos[0]} changeTodoState={this.changeTodoState.bind(this)}/>
                                                </td>
                                                <td>
                                                <CheckboxChild key={1} todo={this.state.todos[1]} changeTodoState={this.changeTodoState.bind(this)}/>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                <CheckboxChild key={2} todo={this.state.todos[2]} changeTodoState={this.changeTodoState.bind(this)}/>
                                                </td>
                                                </tr>
                                            */}
                                            {this.state.todos.map((todo, index) => {
                                                if (index % 2 == 0 && index != this.state.todos.length - 1) { //  跳过0,2,4但不跳过最后一个
                                                    return true;
                                                } else if (index == this.state.todos.length - 1) { //  最后一个
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {index}
                                                                <CheckboxChild key={index} todo={todo} changeTodoState={this.changeTodoState.bind(this)}/>
                                                            </td>
                                                        </tr>
                                                    )
                                                } else {
                                                    var preTodo = this.state.todos[index - 1];
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {index - 1}
                                                                <CheckboxChild key={index - 1} todo={preTodo} changeTodoState={this.changeTodoState.bind(this)}/>
                                                            </td>
                                                            <td>
                                                                {index}
                                                                <CheckboxChild key={index} todo={todo} changeTodoState={this.changeTodoState.bind(this)}/>
                                                            </td>
                                                        </tr>
                                                    )
                                                }

                                            })}
                                            {/*for (var i = 1; i < this.state.todos.length; i = i + 2) {
                                                if (i < length) {
                                                    return (
                                                        <tr>
                                                            <td>1</td>
                                                            <td>2</td>
                                                        </tr>
                                                    )
                                                } else {
                                                    return (
                                                        <tr>
                                                            <td>1</td>
                                                        </tr>
                                                    )
                                                }
                                            }*/}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*测试 end*/}

                {/*面包屑*/}
                <Breadcrumb>
                    <Breadcrumb.Item>
                        服务管理
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/serviceManage/list">服务列表</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        管理服务
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h2 className="fn-ptb-20">账户功能接口</h2>

                {/*服务管理接口*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox>服务管理接口</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>
                                                    <Checkbox>查询接入渠道</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>查询渠道企业信息</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox>统一对外接口</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*服务管理接口 end*/}

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
                                                    <Checkbox>用户信息管理接口</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>
                                                    <Checkbox>开通服务</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>提交用户信息</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox>删除用户信息</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>查询用户信息</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox defaultChecked={false} disabled>修改用户信息</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*用户信息管理接口 end*/}

                {/*核身认证接口*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox>核身认证接口</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>
                                                    <Checkbox>查询核身认证结果</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>执行身份认证</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox>执行个人银行卡认证</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>执行绑定手机</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox>执行人脸认证</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>执行企业小额付款认证（网关）</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox>执行企业小额付款认证（线下）</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*核身认证接口 end*/}

                {/*安全信息管理接口*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox>安全信息管理接口</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>
                                                    <Checkbox>修改登录密码</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>校验登录密码</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox>重置登录密码</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>设置/重置支付密码</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox>修改支付密码</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>校验支付密码</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*安全信息管理接口 end*/}

                {/*关系人管理接口*/}
                <div className="fn-pa-20">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
                            <div className="ant-table-content">
                                <div className="ant-table-body">
                                    <table>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th colSpan={2}>
                                                    <Checkbox>关系人管理接口</Checkbox>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="ant-table-tbody">
                                            <tr>
                                                <td>
                                                    <Checkbox>提交关系人信息</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>修改关系人信息</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox>提交关系人信息</Checkbox>
                                                </td>
                                                <td>
                                                    <Checkbox>修改关系人信息</Checkbox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Checkbox>删除关系人</Checkbox>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*关系人管理接口 end*/}

            </div>
        );
    }
}

class CheckboxChild extends React.Component {
    constructor(props) {
        super(props)
    }
    handlerChange() {
        console.log(this.props.todo.index)
        let isDone = !this.props.todo.isDone;
        this.props.changeTodoState(this.props.todo.index, isDone);
    }
    render() {
        console.log(this)
        return (

            <Checkbox checked={this.props.todo.isDone} onChange={this.handlerChange.bind(this)}>{this.props.todo.text}</Checkbox>

        )
    }
}

class CheckboxChildAll extends React.Component {
    constructor(props) {
        super(props)
    }
    handlerAllState(event) {
        this.props.changeTodoState(null, event.target.checked, true);
    }
    render() {
        console.log(this)
        return (

            <Checkbox checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)}>服务管理接口</Checkbox>

        )
    }
}

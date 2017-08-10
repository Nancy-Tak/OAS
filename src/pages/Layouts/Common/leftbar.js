/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
//import img from 'ASSETS/images/logo.png';

export default class Leftbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //leftbar的状态，默认为没有选中
            accountFunctionCur: false,
            serviceManageCur: false,
            channelManageCur: false,
            accountQueryCur: false,
            systemManageCur: false,

            systemAsideState: this.props.systemAsideState,
            handleStateCur: false,
            handleStateCur: this.props.handleStateCur
        }
    }
    /*
    componentWillReceiveProps(nextProps) - 组件实例即将设置新属性时被调用
    参数nextProps表示即将应用到组件实例上的新属性值。
    这个方法在初次渲染时不会被调用。在此方法内调用setState()不会引起重新渲染。
    systemAsideState props传不了值给state的时候用
    */
    componentWillReceiveProps(nextProps) {
        this.setState({systemAsideState: nextProps.systemAsideState});
    }
    //let accountFunctionArr = ["accountFunction","channelManage","accountQuery","systemManage"];
    //账户功能管理-账户功能列表
    handleAccountFunction(target) {
        //取反，默认为没有选中
        this.setState({
            accountFunctionCur: !this.state.accountFunctionCur
                ? "current"
                : ""
        })
    }
    handleServiceManageCur(target) {
        //取反，默认为没有选中
        this.setState({
            serviceManageCur: !this.state.serviceManageCur
                ? "current"
                : ""
        })
    }
    handleChannelManageCur(target) {
        //取反，默认为没有选中
        this.setState({
            channelManageCur: !this.state.channelManageCur
                ? "current"
                : ""
        })
    }
    handleAccountQueryCur(target) {
        //取反，默认为没有选中
        this.setState({
            accountQueryCur: !this.state.accountQueryCur
                ? "current"
                : ""
        })
    }
    handleSystemManageCur(target) {
        //取反，默认为没有选中
        this.setState({
            systemManageCur: !this.state.systemManageCur
                ? "current"
                : ""
        })
    }
    systemAside() {

        this.props.systemAside();
        // this.setState({
        //     systemAsideState:!this.state.systemAsideState
        // })
    }

    render() {
        console.log(this)
        return (
            <aside className={this.state.systemAsideState
                ? "system-aside fold"
                : "system-aside"} id="systemAside" data-toggle="leftPanel" data-active="fold" data-container-active="fold-for-aside">
                <div className="system-aside-container">

                    <a onClick={this.systemAside.bind(this)} className="system-aside-switch" data-toggle="aside-switch" href="javascript:void(0);">
                        <span></span>
                    </a>

                    <ul className="aside-list-1" data-toggle="navigator">
                        <li>
                            <Link to="/home" className="system-home">
                                <span className="sa">首页</span>
                            </Link>
                            <ul className="aside-list-2"></ul>
                        </li>

                        <li className={this.state.accountFunctionCur}>
                            <a href="javascript:void(0);" className="account-function" onClick={this.handleAccountFunction.bind(this)}>
                                <span className="sa">账户功能管理</span>
                            </a>
                            <ul className="aside-list-2">
                                <li className={this.props.handleStateCur == "/accountFunction/list"
                                    ? "current"
                                    : ""}>
                                    <Link to="/accountFunction/list" title="账户功能列表">
                                        <span className="sa">账户功能列表</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                            </ul>
                        </li>

                        <li className={this.state.serviceManageCur}>
                            <a href="javascript:void(0);" className="service-manage" onClick={this.handleServiceManageCur.bind(this)}>
                                <span className="sa">服务管理</span>
                            </a>
                            <ul className="aside-list-2">
                                <li className={this.props.handleStateCur == "/serviceManage/list"
                                    ? "current"
                                    : ""}>
                                    <Link to="/serviceManage/list" title="服务列表">
                                        <span className="sa">服务列表</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                                <li className={this.props.handleStateCur == "/serviceManage/guide/EditorSteps1"
                                    ? "current"
                                    : ""}>
                                    <Link to="/serviceManage/guide/EditorSteps1" title="接入服务">
                                        <span className="sa">接入服务</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                            </ul>
                        </li>

                        <li className={this.state.channelManageCur}>
                            <a href="javascript:void(0);" className="channel-manage" onClick={this.handleChannelManageCur.bind(this)}>
                                <span className="sa">渠道管理</span>
                            </a>
                            <ul className="aside-list-2">
                                <li className={this.props.handleStateCur == "/channelManage/list"
                                    ? "current"
                                    : ""}>
                                    <Link to="/channelManage/list" title="渠道列表">
                                        <span className="sa">渠道列表</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                                <li className={this.props.handleStateCur == "/channelManage/create/EditorSteps1"
                                    ? "current"
                                    : ""}>
                                    <Link to="/channelManage/create/EditorSteps1" title="创建渠道">
                                        <span className="sa">创建渠道</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                            </ul>
                        </li>

                        <li className={this.state.accountQueryCur}>
                            <a href="javascript:void(0);" className="account-query" onClick={this.handleAccountQueryCur.bind(this)}>
                                <span className="sa">账户查询</span>
                            </a>
                            <ul className="aside-list-2">
                                <li className={this.props.handleStateCur == "/accountQuery/personal"
                                    ? "current"
                                    : ""}>
                                    <Link to="/accountQuery/personal">
                                        <span className="sa">查看个人账户</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                                <li className={this.props.handleStateCur == "/accountQuery/company"
                                    ? "current"
                                    : ""}>
                                    <Link to="/accountQuery/company">
                                        <span className="sa">查看企业账户</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                            </ul>
                        </li>

                        <li className={this.state.systemManageCur}>
                            <a href="javascript:void(0);" className="system-manage" onClick={this.handleSystemManageCur.bind(this)}>
                                <span className="sa">系统管理</span>
                            </a>
                            <ul className="aside-list-2">
                                <li className={this.props.handleStateCur == "/SystemManage/account"
                                    ? "current"
                                    : ""}>
                                    <Link to="/SystemManage/account" title="账户管理">
                                        <span className="sa">账户管理</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                                <li className={this.props.handleStateCur == "/systemManage/role"
                                    ? "current"
                                    : ""}>
                                    <Link to="/systemManage/role" title="角色管理">
                                        <span className="sa">角色管理</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                                <li className={this.props.handleStateCur == "/systemManage/update"
                                    ? "current"
                                    : ""}>
                                    <Link to="/systemManage/update" title="修改密码">
                                        <span className="sa">修改密码</span>
                                    </Link>
                                    <ul className="aside-list-3"></ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

        );
    }
}

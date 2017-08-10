/*
	layout主页面
*/
import React from 'react';

import Leftbar from './Common/leftbar';
import Header from './Common/header';
import Footer from './Common/footer';

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            systemAsideState: false
        }
    }
    systemAside() {

        this.setState({
            systemAsideState: !this.state.systemAsideState
        })
    }
    render() {
        let handleStateCur = this.props.location.pathname
        console.log(handleStateCur)
        return (
            <div className="main-frm">
                <Header/>
                <div className={this.state.systemAsideState
                    ? "system-container fold-for-aside"
                    : "system-container"}>
                    <div className="system-content-wrap">
                        <a href="javascript:void(0);" className="system-assist-nav-switch" data-toggle="assist-switch"></a>
                        <div className="system-content">
                            <div className="frame-wrap-bg">
                                {/* 左边容区 */}
                                <Leftbar handleStateCur={handleStateCur} systemAside={this.systemAside.bind(this)} systemAsideState={this.state.systemAsideState}/>

                                <div className="frame-wrap">
                                    {/* 主内容区 */}
                                    {this.props.children}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

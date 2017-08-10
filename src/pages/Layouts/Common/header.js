/*
  公用头部
*/
import React from 'react';
import {Link} from 'react-router';
import systemLogo from 'ASSETS/images/eplus.png';
import userHead from 'ASSETS/images/avatar/userHead.png';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="system-top-nav">
                <Link to="/" className="system-logo">
                    <img src={systemLogo} alt=""/>
                </Link>
                <div className="stn-dropdown-wrap pull-left">
                    <a href="javaScript:void(0);" className="stn-btn">
                        OAS大账户
                    </a>
                    <div className="stn-dropdown-menu stn-product-menu">
                        <div className="stn-pm-box">
                            <ul className="pl">
                                <li>
                                    <Link to="/" title="OAS大账户">OAS大账户</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="stn-dropdown-wrap pull-right user">
                    <a className="stn-btn">
                        <img src={userHead} alt=""/>
                        Hello! rayalienkiss
                    </a>
                    <div className="stn-dropdown-menu">
                        <ul className="stn-user-menu">
                            <li>
                                <Link to="/systemManage/update">修改密码</Link>
                            </li>
                            <li>
                                <a href="javaScript:void(0);">退出</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

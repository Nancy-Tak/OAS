import React, { Component, PropTypes } from 'react';


// 样式
import './rightTable.less';
// antd 组件
import {
    Checkbox
} from 'antd';

class ThirdItem extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = this.props.item;
    }

    render(){
        return (
            <div className="row row1">
                <Checkbox checked={this.state.checked}>{this.state.name}</Checkbox>
            </div>
        )
    }
}

class SecItem extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = this.props.item;
    }

    render() {
        return (
            <div className={`row row${this.state.length}`}>
                <div className={`ant-col-${this.state.thirdArray.length > 0 ? 12 : 24} col`}>
                    <div className={`row row${this.state.length}`}>
                        <Checkbox checked={this.state.checked}>{this.state.name}</Checkbox>
                    </div>
                </div>

                {
                    this.state.thirdArray.length > 0
                    ?
                    <div className="ant-col-12 col">
                        {this.state.thirdArray.map((item,index) => {
                            return( <ThirdItem item={item} key={index}></ThirdItem> )
                        })}
                    </div>
                    :
                    null
                }

            </div>
        )
    }
}

class FirstItem extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = this.props.item;
    }

    toggleChange(){
        this.setState({
            checked : !this.state.checked
        })
    }

    render() {
        return (
            <div className="ant-row rc-box">
                <div className="ant-col-8 col">
                    <div className={`row row${this.state.length}`}>
                        <Checkbox checked={this.state.checked} onChange={ this.toggleChange.bind(this) }>{this.state.name}</Checkbox>
                    </div>
                </div>
                <div className="ant-col-16 col">
                    {this.state.secArray.map((item,index) => {
                        return( <SecItem item={item} key={index}></SecItem> )
                    })}
                </div>
            </div>
        )
    }
}

class RightTable extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            firstArray : [{
                name : "1",
                checked : false,
                secArray : [{
                    name : "1.1",
                    checked : false,
                    thirdArray : [{
                        name:"1.1.1",
                        checked : false,
                    },{
                        name:"1.1.2",
                        checked : false,
                    },{
                        name:"1.1.3",
                        checked : false,
                    }]
                },{
                    name : "1.2",
                    checked : false,
                    thirdArray : [{
                        name:"1.2.1",
                        checked : false,
                    },{
                        name:"1.2.2",
                        checked : false,
                    }]
                }]
            },{
                name : "2",
                checked : false,
                secArray : [{
                    name : "用户权限设置",
                    checked : false,
                    thirdArray : []
                },{
                    name : "2.2",
                    checked : false,
                    thirdArray : [{
                        name:"1.2.1"
                    }]
                }]
            }]
        }
    }

    _getTotalLength(){
        this.state.firstArray.map((firstItem,i) => {
            firstItem.length = 0;
            firstItem.secArray.map((secItem,index) => {
                secItem.length = secItem.thirdArray.length || 1;
                firstItem.length += secItem.length;
            });
        });
    }

    render() {
        this._getTotalLength();
        return (
            <div>
                {this.state.firstArray.map((item,index) => {
                    return(
                        <FirstItem item={item} key={index}></FirstItem>
                    )
                })}
            </div>
        );
    }
}

export default RightTable;

import React, {
	Component,
	PropTypes
} from 'react';

// antd 组件
import {
	Checkbox
} from 'antd';


class ValidataTableTr extends Component{
    static propTypes = {
        className: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            display :this.props.data.display,
            required :this.props.data.required,
            mathRandom:""
        }
    }
    handleDisplayChange(){
        this.state.display.checked = !this.state.display.checked
        if(this.state.display.checked){
            // 显示被选上则必填为可用
            this.state.required.disabled = false;
        }else{
            // 显示没被选上则必填为不可用,而且取消选择
            this.state.required.disabled = true;
            this.state.required.checked = false;
        }
        this.setState({
            mathRandom:Math.random()
        })
    }
    handleRequiredChange(){
        this.state.required.checked = !this.state.required.checked
        this.setState({
            mathRandom:Math.random()
        })
    }

    render(){
        let data = this.props.data;
        return(
            <tr>
                <td>
                    { data.name }
                </td>
                <td>
                    <Checkbox checked={this.state.display.checked} disabled={this.state.display.disabled} onChange={this.handleDisplayChange.bind(this)}></Checkbox>
                </td>
                <td>
                    <Checkbox checked={this.state.required.checked} disabled={this.state.required.disabled} onChange={this.handleRequiredChange.bind(this)}></Checkbox>
                </td>
                <td>
                    { data.remarks }
                </td>
            </tr>
        )
    }
}

class ValidataTable extends Component {
	static propTypes = {
		className: PropTypes.string
	};

	constructor(props) {
		super(props);
        this.state = {
            items : this.props.items
        }
	}

	render() {
		return (
			<table>
                <thead className="ant-table-thead">
                    <tr>
                        { this.props.titles.map((title,index) => {
                            return (<th key={index}>{title}</th>)
                        })}
                    </tr>
                </thead>
                <tbody className="ant-table-tbody">
                    {this.state.items.map((item,index)=>{
                        return <ValidataTableTr key={index} data={item}/>
                    })}
                </tbody>

            </table>
		);
	}
}

export default ValidataTable;
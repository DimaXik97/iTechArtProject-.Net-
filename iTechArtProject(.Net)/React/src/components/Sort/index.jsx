import React from 'react';


class Sort extends React.Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.changeOrderField(event.target.value);
    }
    render(){
        return (<span>
            <img src={this.props.order?"/img/sort_up.png":"/img/sort_down.png"} onClick={()=>{this.props.sort(!this.props.order)}}/>
            <select value={this.props.field} onChange={this.handleChange}>
                {this.props.orderFields.map((element, num)=>{
                    return <option key={num} value={element.value}>{element.text}</option>
                })}
            </select>
        </span>)
    }

  
};

export default Sort;
import React from 'react';
import {Link} from 'react-router-dom';

class Element extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(event, id){
        event.preventDefault();
        this.props.deleteElement(id)
    }
    admineIements(id){
        return (<p className="adminMenu">
            <span className="edit"></span>
            <span className="delete" onClick={(event)=>{this.handleDelete(event, id)}}></span>
        </p>)
    }
    addElement(){
        return(
        <li className="element">
            <div className="content-center adminMenu" onClick={this.props.addElement}>
                <span className="add"></span>
            </div>
        </li>)
    }
    render(){
        return (
            <ul className="container">
                {this.props.data.map((element, num)=>{
                    return (
                        <li key={element.id} className="element">
                            <Link to={this.props.url+"/"+element.id} 
                                className="content-center">{element.text}
                                {this.props.isAdmin?this.admineIements(element.id):undefined}
                            </Link>
                            {this.props.isAdmin?<input type="checkbox" className="isReady" checked={element.isReady} onChange={(e)=>{this.props.changeCheckBox(element.id, e.target.checked)}}/>:null}
                        </li>)
                    })
                }
                {this.props.isAdmin?this.addElement():undefined}
            </ul>
        );
    }
};
export default Element;
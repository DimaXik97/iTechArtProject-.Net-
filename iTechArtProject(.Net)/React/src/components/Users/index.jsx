import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"
import Sort from "./../../containers/Sort.js"

class Users extends React.Component{
  componentDidMount(){
    this.props.init();
  }
  render(){
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
    return (
      <main >
        <h1 className="title">Выберете пользователя:<Sort orderFields={this.props.orderFields} field={this.props.field} changeOrderField={this.props.changeOrderField}/></h1>
        <ContainerElements url={window.location.pathname} data={this.props.users.map((element)=>{return {id:element.id, text: element.name}})}/>
      </main>);
  }
};
export default Users;
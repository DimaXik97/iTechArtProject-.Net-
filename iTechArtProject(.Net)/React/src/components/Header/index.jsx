import React from 'react';
import {browserHistory, withRouter } from 'react-router';
import DefaultLink from "./../DefaultLink/index.jsx";

class Header extends React.Component{
  constructor(props) {
      super(props);
      this.handleLogOut = this.handleLogOut.bind(this);
    }
  handleLogOut(event){
    event.preventDefault();
    this.props.logOut();
  }
  render(){
    return (<header className="container">
      <div className="logo">
        <img src="/img/logo.png"/>
      </div>
      <ul className="menu container">
        <DefaultLink nameLink="Тесты" link={this.props.isAdmin?"/admin/test":"/test"}/>
        <DefaultLink nameLink="О компании" link="/"/>
      </ul>
      {this.props.name?
      (<ul className="menu container">
        <DefaultLink nameLink={this.props.isAdmin?"Пользователи":this.props.name} link={this.props.isAdmin?"/admin/user":"/profile"}/>
        <span className="menuItem" onClick={this.handleLogOut} > Выйти</span>
      </ul>):(<ul className="menu container">
        <DefaultLink nameLink={"Регистрация"} link={"/signUp"}/>
        <DefaultLink nameLink={"Войти"} link={"/signIn"}/>
      </ul>)}
  </header>);
  }
};

export default withRouter(Header);
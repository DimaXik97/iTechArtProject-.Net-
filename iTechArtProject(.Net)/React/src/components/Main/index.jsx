import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'

import Header from "./../../containers/Header.js";
import Footer from "./../Footer/index.jsx";

/*import Categories from "./../../containers/Categories.js";
import About from "./../../containers/About.js";
import Profile from "./../../containers/User.js";
import Users from "./../../containers/Users.js";
import Test from "./../../containers/Tests.js";
import Questions from "./../../containers/Questions.js";
import Result from "./../../containers/Result.js";*/

class Main extends React.Component{
  render(){
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
    return (<div className="body">
        <Header/> 
        {this.props.children}
        <Footer/>
      </div>);
  }
  
  /*return (
        <div className="body">
          <Header isAdmin={isAdmin}/>
          <Switch>
            <Route path="/test/:category/:test" component={Questions}/>
            <Route path="/test/:category" component={Test}/>
            <Route path="/test" component={Categories}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={About}/>
          </Switch>
          <Footer/>
        </div>);*/

};

export default Main;
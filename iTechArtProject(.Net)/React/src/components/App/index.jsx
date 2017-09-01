import React from 'react';
import {Link} from 'react-router-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from "./../../history.js";

import SignIn from './../../containers/SignIn.js';
import SignUp from './../../containers/SignUp.js';
import Main from './../Main/index.jsx';

import Categories from "./../../containers/Categories.js";
import About from "./../../containers/About.js";
import Profile from "./../../containers/User.js";
import Users from "./../../containers/Users.js";
import Test from "./../../containers/Tests.js";
import Questions from "./../../containers/Questions.js";
import Result from "./../../containers/Result.js";

class App extends React.Component{
    render(){
        return (<Router history={history}>
            <Switch>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/signUp" component={SignUp}/>
                <Main>
                    <Route path="/about" component={About}/>
                    <Route path="/profile" component={Profile}/> 
                    <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                    <Route path="/test" render={()=>(
                        this.props.isAuth
                        ?<Switch>
                            <Route path="/test/:category/:test" component={Questions}/>
                            <Route path="/test/:category" component={Test}/>
                            <Route path="/test" component={Categories}/>
                        </Switch>
                        :<Redirect to={ '/signIn' }/>
                        )}
                    />
                    <Route path="/admin" render={()=>(
                        this.props.isAdmin
                        ?<Switch>
                            <Route path="/admin/test/:category/:test" component={Questions}/>
                            <Route path="/admin/test/:category" component={Test}/>
                            <Route path="/admin/test" component={Categories}/>
                            <Route path="/admin/user/:id" component={Profile}/>
                            <Route path="/admin/user" component={Users}/>
                            <Route path="/admin/question/:id" component={Result}/>
                            <Route path="/admin" render={() => <Redirect to="/admin/test"/>}/>
                        </Switch>
                        :<Redirect to={ '/test' }/>
                        )}
                    />
                </Main>
            </Switch> 
        </Router>)
    }
};

export default App;
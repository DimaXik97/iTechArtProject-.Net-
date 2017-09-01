import React from 'react';
import {Link} from 'react-router-dom';

class SignIn extends React.Component{
        constructor(props) {
                super(props);
                this.handleLogin = this.handleLogin.bind(this);
        }
        handleLogin(event){
                event.preventDefault();
                var email= this.refs.Email.value;
                var password = this.refs.Password.value;
                this.props.login(email, password);
        }
        render(){
                console.log("signIn");
                return (<div className="authentication">
                        <h1 className="title">Авторизация</h1>
                        <form>
                                <fieldset>
                                        <input type="email" ref='Email' placeholder="E-mail"/>
                                        <input type="password" ref='Password' placeholder="Пароль"/>
                                        <input className="default-btm" type="submit" onClick={this.handleLogin} value="Войти"/>
                                        <Link to="/signUp"><button className="default-btm">Регистрация</button></Link>
                                </fieldset>
                        </form>
                </div>);
        }
};
export default SignIn;
import React from 'react';

class SignUp extends React.Component{
    constructor(props) {
            super(props);
            this.handleRegistr = this.handleRegistr.bind(this);
    }
    handleRegistr(event){
        event.preventDefault();
        if(this.refs.Password1.value==""||this.refs.Password1.value!=this.refs.Password2.value)
        {
            this.refs.Password1.value="";
            this.refs.Password2.value="";
            return;
        }
        this.props.registr(this.refs.Email.value, this.refs.Password1.value, this.refs.Name.value, this.refs.SurName.value);
    }
    render(){
        return (<div className="authentication">
        <h1 className="title">Регистрация</h1>
        <form>
            <fieldset>
                    <input type="email" ref="Email" placeholder="E-mail"/>
                    <input type="password" ref="Password1" placeholder="Пароль"/>
                    <input type="password" ref="Password2" placeholder="Подтвердите пароль"/>
                    <input type="text" ref="Name"  placeholder="Фамилия"/>
                    <input type="text" ref="SurName" placeholder="Имя"/>
                    <input className="default-btm" type="submit" onClick={this.handleRegistr} value="Зарегестрироваться"/>
            </fieldset>
        </form>
    </div>);
    }
};

export default SignUp;
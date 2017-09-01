import React from 'react';

import QuestionItem from './item.jsx';
import ContainerElements from "./../ContainerElements/index.jsx";

class QuestionList extends React.Component{/*({questions,addQuestion,deleteQuestion,changeQuestion, usersAnswers})=>*/
    componentDidMount(){
        let params=this.props.match.params;
        this.props.init(params.category,params.test,"test");
    }
    render() {
        let isAdmin = window.location.pathname.indexOf("/admin/")==0;
        let usersTests=null/*(<div>
            <h2 className="title">Ответы пользователей:</h2>
            <ContainerElements url={"/admin/question"} data={this.props.usersAnswers.map((element)=>{return {id:element.id, text: `${element.user.name} ${element.user.surName} ${element.date}`}})}/>
        </div>)*/;
        return (
            <main>
                <form>
                    <ul>
                        {this.props.questions.map((element, num)=>{
                            return <QuestionItem key={num} item={element} deleteQuestion={this.props.deleteQuestion} changeQuestion={this.props.changeQuestion} isAdmin={isAdmin}/> 
                        })}
                    </ul>
                    <input className="default-btm" type="submit" value={isAdmin?"Сохранить":"Отправить ответы"}/>
                    {isAdmin?<input className="default-btm" type="submit" value={"Добавить вопрос"} onClick={(e)=>{e.preventDefault(); this.props.addQuestion()}}/>:undefined}
                </form>
            {isAdmin?usersTests:undefined} 
            </main>
        );
    }
  
};
export default QuestionList;
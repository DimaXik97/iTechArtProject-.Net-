import React from 'react';

import QuestionItem from './item.jsx';
import ContainerElements from "./../ContainerElements/index.jsx";

class QuestionList extends React.Component{/*({questions,addQuestion,deleteQuestion,changeQuestion, usersAnswers})=>*/
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleIsReady = this.handleIsReady.bind(this);
    }
    componentDidMount(){
        let params=this.props.match.params;
        this.props.init(params.category,params.test,"test");
    }
    handleAdd(event){
        event.preventDefault();
        let params=this.props.match.params;
        this.props.addQuestion(params.category,params.test, this.refs.typeQuestion.value);
    }
    handleDelete(id){
        let params=this.props.match.params;
        this.props.deleteQuestion(params.category,params.test, id);
    }
    handleIsReady(id, isReady){
        let params=this.props.match.params;
        this.props.changeIsReadyQuestion(params.category,params.test, id, isReady)
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
                            return <QuestionItem key={num} item={element} deleteQuestion={this.handleDelete} changeIsReadyQuestion={this.handleIsReady} isAdmin={isAdmin}/> 
                        })}
                    </ul>
                    <input className="default-btm" type="submit" value={isAdmin?"Сохранить":"Отправить ответы"}/>
                    {isAdmin?<div>
                            <input className="default-btm" type="submit" value={"Добавить вопрос"} onClick={this.handleAdd}/>
                            <select ref="typeQuestion">
                                <option value="1">Текст</option>
                                <option value="2">Checkbox</option>
                                <option value="3">Radiobox</option>
                            </select>
                        </div>:undefined}
                </form>
            {isAdmin?usersTests:undefined} 
            </main>
        );
    }
  
};
export default QuestionList;
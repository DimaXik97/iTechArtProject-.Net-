import React from 'react';

import Text from './text.jsx';
import Select from './select.jsx';


function getAnswer(item, isAdmin){
    switch(item.type){
        case 1: {
            return <Text />;
        }
        case 2:{
            return item.answers.map((element, num)=>{
                return (<Select type={"checkbox"} key={num} id={item.id} answer={element} isAdmin={isAdmin}/>)
            })
        }
        case 3:{
            return item.answers.map((element, num) => {
                return (<Select type={"radio"} key={num} id={item.id} answer={element} isAdmin={isAdmin} />)
            })
        }
    }
}

const QuestionItem = ({ item, isAdmin, deleteQuestion, changeQuestion }) => {
    let adminBtm=<span><span className="edit"> </span><span className="delete" onClick={()=>{deleteQuestion(item.id)}}> </span><input type="checkbox" checked={item.isReady} onChange={()=>{changeQuestion(item.id)}} className="isReady"/></span>;
    return (
        <li className="question">
            <h2 className="title">
                {item.question}{isAdmin?adminBtm:undefined}
            </h2>
            <fieldset>
                {getAnswer(item, isAdmin)}
            </fieldset>
        </li>
  );
};
export default QuestionItem;
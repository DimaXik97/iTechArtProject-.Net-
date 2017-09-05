import React from 'react';

import Text from './text.jsx';
import Select from './select.jsx';

function getAnswer(item, isAdmin, handleChange){
    switch(item.type){
        case 1: {
            return <Text onChange={handleChange} id={item.id}/>;
        }
        case 2:{
            return item.answers.map((element, num)=>{
                return (<Select onClick={handleChange} type={"checkbox"} key={num} id={item.id} answer={element} isAdmin={isAdmin}/>)
            })
        }
        case 3:{
            return item.answers.map((element, num) => {
                return (<Select onClick={handleChange} type={"radio"} key={num} id={item.id} answer={element} isAdmin={isAdmin} />)
            })
        }
    }
}

const QuestionItem = ({ item, isAdmin, deleteQuestion, changeIsReadyQuestion, handleChange}) => {
    let adminBtm=<span><span className="edit"> </span><span className="delete" onClick={()=>{deleteQuestion(item.id)}}> </span><input type="checkbox" checked={item.isReady} onChange={()=>{changeIsReadyQuestion(item.id, !item.isReady)}} className="isReady"/></span>;
    return (
        <li className="question">
            <h2 className="title">
                {item.question}{isAdmin?adminBtm:undefined}
            </h2>
            <fieldset>
                {getAnswer(item, isAdmin, handleChange)}
            </fieldset>
        </li>
  );
};
export default QuestionItem;
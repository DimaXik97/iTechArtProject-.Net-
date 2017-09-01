import React from 'react';

function getAnswer(answer){
    switch(answer.type){
        case 1:{
            return (<ul className="contentBody">
                {answer.answers.map((element)=>{
                    return <li className={getClass(element.atrr)}>{element.text}</li>
                })}
            </ul>)
        };
        case 2:{
            return (<ul className="contentBody">
                {answer.answers.map((element)=>{
                    return <li className={getClass(element.atrr)}>{element.text}</li>
                })}
            </ul>)
        }
        case 3:{
            return (<div className="contentBody">
                <p>Правельный ответ:<span className={getClass(answer.correctAnswer.atrr)}>{answer.correctAnswer.text}</span></p>
                <p>Ответ:<span className={getClass(answer.userAnswer.atrr)}>{answer.userAnswer.text}</span></p>
            </div>)
            
        }
 }
}
function getClass(atrr){
    console.log(atrr);
    let className="";
    atrr.map((element=>{
        switch(element){
        case "user":{ return className+="userAnswer "};
        case "correct":{return className+="correctAnswer "};
    }
    }))
    return className;
}

const Answer = (props)=> {
  return (<li className="question">
            <h2 className="title">
                {props.answer.question}
            </h2>
            {getAnswer(props.answer)}
        </li>
            );
};
export default Answer;
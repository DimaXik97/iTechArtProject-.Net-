import React from 'react';

import Answer from './answer.jsx';

class AnswerList extends React.Component {
    componentDidMount(){
        this.props.init(this.props.match.params.id)
    }
    render(){
        return (
        <main>
            <ul>
                {
                    this.props.result.map((element, num)=>{
                        return <Answer key={num} answer={element}/>
                })}
            </ul>
        </main>);
    }
};
export default AnswerList;
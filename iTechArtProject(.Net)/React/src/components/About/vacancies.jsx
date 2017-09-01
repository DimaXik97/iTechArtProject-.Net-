import React from 'react';

import Item from './itemContent.jsx';

const Vacancies = ({vacancies})=> {
    return (
    <div className="content">
        {
            vacancies.map((element,num)=>{
                 return <Item key={num} title={element.title} text={element.text}/>
            })
        }
    </div>
    );
};
export default Vacancies;
import React from 'react';

import Item from './itemContent.jsx';

const News = ({news})=> {
    return (
    <div className="content">
        {
            news.map((element, num)=>{
                 return <Item key={num} title={element.title} photo={element.img} text={element.text}/>
            })
        }
    </div>
    );
};
export default News;
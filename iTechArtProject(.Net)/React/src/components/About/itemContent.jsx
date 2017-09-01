import React from 'react';

const ItemContent= (props)=> {
    return (<div className="contentBody">
        <h2 className="title">
            {props.title}
        </h2>
        {props.photo?<img src={props.photo}/>:undefined}
        <p>{props.text}</p>
    </div>)
};
export default ItemContent;
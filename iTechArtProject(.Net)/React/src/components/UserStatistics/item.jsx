import React from 'react';

const Item = (props)=> {
  return (
    <li className="item">
        <p className="value">
            {props.element.value}
        </p>
        <p>{props.element.data}</p>
    </li>
  );
};
export default Item;
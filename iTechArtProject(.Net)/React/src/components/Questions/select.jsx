import React from 'react';

let adminBtm=<span><span className="edit"> </span></span>;

const Select = (props)=> {
  return (<p>
      <input name={props.id} type={props.type} value={props.answer.value} onClick={props.onClick}/> {props.answer.title} {props.isAdmin?adminBtm:undefined}
  </p>);
};
export default Select;
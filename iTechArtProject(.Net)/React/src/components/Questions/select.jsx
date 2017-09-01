import React from 'react';

let adminBtm=<span><span className="edit"> </span></span>;

const Select = (props)=> {
  return (<p>
      <input name={props.type + "-" + props.id} type={props.type} value={props.answer.value}/> {props.answer.title} {props.isAdmin?adminBtm:undefined}
  </p>);
};
export default Select;
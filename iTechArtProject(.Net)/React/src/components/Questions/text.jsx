import React from 'react';

const Text = (props)=> {
  return (
    <textarea onChange={props.onChange} name={props.id} cols="40" rows="3"></textarea>
  );
};
export default Text;
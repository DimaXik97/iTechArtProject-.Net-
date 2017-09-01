import React from 'react';
import {Link} from 'react-router-dom';

const defLink = (props)=> {
  return (
   <li className="menuItem">
        <Link to={props.link}>{props.nameLink}</Link>
   </li>
  );
};
export default defLink;
import React from 'react';

import Item from './item.jsx';

const UserStatistics = ({statistics})=> {
  return (
    <ul className="userStatistics container">
        {statistics.map((element, num)=>{
            return <Item key={num} element={element}/>
        })}
    </ul>
  );
};
export default UserStatistics;
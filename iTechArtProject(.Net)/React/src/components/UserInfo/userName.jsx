import React from 'react';
const UserName = ({user})=> {
  return (
    <div className="userName">
        <p>{user.surname}</p>
        <p>{user.name}</p>
    </div>
  );
};
export default UserName;
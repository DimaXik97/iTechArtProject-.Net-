import React from 'react';

import UserMenu from "./userMenu.jsx";
import UserName from "./userName.jsx";
import UserPhoto from "./userPhoto.jsx";

const UserInfo = ({isAdmin, user, photo})=> {
  return (
      <div className="userInfo container">
        <UserPhoto photo={photo}/>
        <UserName user={user}/>
        <UserMenu isAdmin={isAdmin}/>
      </div>
  );
};
export default UserInfo;
import React from 'react';

const UserPhoto = ({photo})=> {
  return (
    <div className="userPhoto">
        <img alt="userPhoto" src={photo?photo:"/img/default_photo.png"}/>
    </div>
  );
};
export default UserPhoto;
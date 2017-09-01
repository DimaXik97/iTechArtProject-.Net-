import React from 'react';

const userBtm=
    {admin: ["Заблокировать"],
    user: ["Изменить фотографию", "Изменить имя", "Изменить пароль"]};

const UserMenu = (props)=> {
  return (
    <div className="profileMenu">
        {(props.isAdmin?userBtm.admin:userBtm.user).map((element, num)=>{
            return (<button key={num} className="default-btm">{element}</button>)
        })}
    </div>
  );
};
export default UserMenu;
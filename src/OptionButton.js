import React from 'react'
import Avatar from '@mui/material/Avatar';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';

function OptionButton({avatar,active,Icon,title,onClick}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className={active ? "mr-[20px] w-[70px] flex flex-col place-items-center cursor-pointer text-black border-solid border-b-2 border-black text-center" : "text-gray-600 mr-[20px] w-[70px] flex flex-col place-items-center cursor-pointer hover:text-black text-center"}>
        {avatar && <Avatar className="object-contain" style={{height:'25px', width:'25px'}} src={user?.photoUrl}>{user?.email[0]}</Avatar>}
        {Icon && <Icon className="object-contain" style={{height:'25px', width:'25px'}}/>}
        <h2 className="text-[12px] font-[400px]">{title}</h2>
    </div>
  )
}

export default OptionButton;
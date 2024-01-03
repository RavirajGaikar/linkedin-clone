import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import './LeftSection.css';

function Recent({name}) {
  return (
    <div>
      <div className='Recenthover flex items-center hover:bg-[#f3f2ef] pl-[10px] pr-[10px]'>
        <GroupsIcon style={{objectFit:'contain',height:'20px',width:'20px'}}/>
        <p className='hovercolor pl-[7px] text-gray-500 text-[13px] font-medium'>{name}</p>
      </div>
    </div>
  );
}

export default Recent;

import React from 'react';
import './LeftSection.css';

function PostIcon({Icon,text,color}) {
  return (
    <div className='Recenthover flex rounded-[7px] hover:bg-[#f3f2ef] h-[50px] items-center px-auto px-[10px]'>
        {Icon && <Icon style={{color:color}}/>}
        <h4 className='hovercolor pl-1 font-medium text-[14px] text-gray-500 w-fit'>{text}</h4>
    </div>
  );
}

export default PostIcon;

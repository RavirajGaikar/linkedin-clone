import React from 'react'

function News({title,time,readers}) {
  return (
    <div className='pl-5 mb-[10px] hover:bg-gray-300'>
        <ul style={{listStyleType:"disc"}}>
        <li><div className='font-semibold text-gray-700 text-[14px]'>{title}</div></li>
        </ul>
        <div className='flex text-gray-500 text-[12px]'>
            <div>{time}h ago</div>
            <div className='ml-4'>{readers} readers</div>
        </div>
      
    </div>
  );
}

export default News;

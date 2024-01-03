import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Recent from './Recent.js';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SquareIcon from '@mui/icons-material/Square';
import {db} from './firebase';

function LeftSection() {
  const user = useSelector(selectUser);

  const [mydescription, setMyDescription] = useState('');

  useEffect(() => {
    db.collection('info').where('email', '==', user.email).get()
      .then((querySnapshot) => {
        const mydocument = querySnapshot.docs[0]?.data();
        const description = mydocument?.description || '';
        setMyDescription(description);
      })
      .catch((error) => {alert( error);
      });
  }, [user.email]);

  return (
    <div style={{flex:'0.2'}} className='flex flex-col sticky top-[80px]'>
      {/*top section*/}
      <div className='bg-white rounded-[10px] flex flex-col border-solid border-[1px] border-gray-300'>
        {/*First Part*/}
        <div className='flex flex-col items-center text-center'>
            <img className='h-[60px] mb-[-20px] w-[100%] object-cover rounded-t-[10px]' src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE3MDM1MjgxOTd8MA&ixlib=rb-4.0.3.jpg"  alt="Background"/>
            <Avatar style={{height:'70px',width:'70px'}} src={user.photoUrl}>{user.email[0]}</Avatar>
            <h2 className='font-semibold mt-[10px] pl-[10px] pr-[10px] hover:underline'>{user.displayName}</h2>
            <h4 className='text-gray-500 text-[13px] mb-[10px] pl-[10px] pr-[10px]'>{mydescription}</h4>
        </div>
        {/*Second Part*/}
        <div className='pt-[10px] pb-[10px] border-[1px] border-t-gray-300 border-b-gary-300'>
          <div className='pl-[10px] pr-[10px] flex justify-between text-gray-500 text-[13px] hover:bg-[#f3f2ef] font-medium'> 
            <p>Profile viewers</p>
            <p className='text-blue-600'>14</p>
          </div>
          <div className='pl-[10px] pr-[10px] flex justify-between text-gray-500 text-[13px] hover:bg-[#f3f2ef] font-medium'>
            <p>View all analytics</p>
            <p></p>
          </div>
        </div> 
        {/*Third Part */}
        <div className='p-[10px] hover:bg-[#f3f2ef]'>
          <div className='text-gray-500 text-[13px]'>Strengthen your profile with an AI writing assistant</div>
          <div className='text-[14px] hover:text-blue-500 hover:underline'><SquareIcon style={{height:'17px',color:'orange'}}/>Try premimum for ₹0</div>
        </div>   
        {/*Fourt Part */}   
        <div className='p-[10px] text-gary-300 border-solid  border-[1px] border-t-gary-300 hover:bg-[#f3f2ef]'>
          <div className='font-semibold text-[13px]'><BookmarkIcon style={{height:'17px'}}/>My items</div>
        </div>   
      </div>

      {/* Bottom Section */}
      <div className='bg-white rounded-[10px] flex flex-col border-solid border-[1px] border-gray-300 mt-[10px] pt-[10px] pb-[10px]'>
        {/*Recent Section */}
        <div>
          <h4 className=' text-gray-600 text-[14px] font-medium p-[10px]'>Recent</h4>
          <Recent name="React Developers"/>
          <Recent name="Learn Web Development"/>
          <Recent name="Frontend Development"/>
          <Recent name="Data Science Community"/>
        </div>
        {/*Group Section */}
        <div>
        <h4 className=' text-gray-600 text-[14px] font-medium p-[10px]'>Groups</h4>
          <Recent name="React Developers"/>
          <Recent name="Frontend Development"/>
          <Recent name="Learn Web Development"/>
          <Recent name="Full Stack Developer"/>
        </div>
        {/*Events Section */}
        <div>
          <div className='text-blue-600 text-[14px] p-[10px] font-medium hover:underline cursor-pointer'>Events</div>
        </div>
        {/*Followed Hashtag Section */}
        <div>
          <div className='text-blue-600 text-[14px] p-[10px] font-medium hover:underline cursor-pointer'>Followed Hashtag</div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection

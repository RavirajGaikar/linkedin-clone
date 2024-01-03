import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OptionButton from './OptionButton.js';
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import {logout} from './features/userSlice';




function Header() {

  const dispatch = useDispatch();



  const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className='flex justify-evenly border-solid bg-white z-[999] border-b-[1px] border-gray-500 sticky top-0'>
        {/* left section */}
        <div className='flex my-2'>
            <img class="h-[35px] object-contain" src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="Likedin Image"/>
            <div className='ml-2 bg-[#eef3f8] flex items-center pl-3 rounded-sm h-[35px] '>
                <SearchIcon/>
                <input class="outline-none border-none bg-inherit w-[270px]" type="text" placeholder='Search'></input>
            </div>
        </div>
        {/* right section */}
        <div className='flex pt-2'>
            <OptionButton Icon={HomeIcon} active={true} title="Home"/>
            <OptionButton Icon={SupervisorAccountIcon} title="My Network"/>
            <OptionButton Icon={BusinessCenterIcon} title="Jobs"/>
            <OptionButton Icon={ChatIcon} title="Messaging"/>
            <OptionButton Icon={NotificationsIcon} title="Notification"/>
            <OptionButton avatar={true} onClick={logoutOfApp} title="Me"/>
        </div>
    </div>
  )
}

export default Header;

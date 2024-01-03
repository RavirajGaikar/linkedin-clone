import React,{forwardRef} from 'react';
import Avatar from '@mui/material/Avatar';
import PostIcon from './PostIcon.js';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import SendIcon from '@mui/icons-material/Send';
import { formatDistanceToNow } from 'date-fns';

const Post = forwardRef(({link,name,title,time,content},ref) => {

    const formatTimestamp = (timestamp) => {
        const date = timestamp.toDate();
        return formatDistanceToNow(date, { addSuffix: true });
        };
        const formattedTime = formatTimestamp(time);

  return (
    <div ref={ref} className='bg-white mb-[10px] p-[15px]'>
        {/*Header */}
        <div className='flex items-center mb-[10px]'>
            <Avatar style={{height:'50px',width:'50px'}} src={link}>{name[0]}</Avatar>
            <div className='flex flex-col ml-[10px]'>
                <div className='font-semibold text-[14px]'>{name}</div>
                <div className='text-gray-500 text-[12px] mt-[-2px]'>{title}</div>
                <div className='text-gray-500 text-[12px] mt-[-4px]'>{formattedTime}</div>
            </div>
        </div>
        {/*Content */}
        <div className='font-[14px] mb-[10px] text-gray-700'>
            {content}
        </div>
        {/*Likes */}
        <div className="border-t-[1px] border-solid border-gary-500 p-[15px] flex justify-evenly">
            <PostIcon Icon={ThumbUpOffAltIcon} text="Like" color="rgb(107 114 128)"/>
            <PostIcon Icon={CommentIcon} text="Comment" color="rgb(107 114 128)"/>
            <PostIcon Icon={RepeatOneIcon} text="Repost" color="rgb(107 114 128)"/>
            <PostIcon Icon={SendIcon} text="Send" color="rgb(107 114 128)"/>
        </div>

    </div>
  );
})

export default Post;

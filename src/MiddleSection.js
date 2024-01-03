import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import PostIcon from './PostIcon.js';
import Post from './Post.js';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import {db} from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import FlipMove from "react-flip-move";



function MiddleSection() {
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);
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

    useEffect(()=>{
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot)=>{
            setPosts(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                }))
            );
        });
    },[]);
      
    const onSubmit = (e) =>{
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description:mydescription,
            message: input,
            photoURL: user.photoUrl || "",
            timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        });


        setInput("");
    };
      
  return (
    <div className='flex flex-col flex-[0.5] ml-[20px]'>
        {/*Create Post */}
        <div className='bg-white p-[10px] rounded-[10px] border-solid border-[1px] border-gray-300'>
            <div className='flex'>
                <Avatar style={{height:'50px',width:'50px'}} src={user.photoUrl}>{user.email[0]}</Avatar>
                <form onSubmit={onSubmit} className="ml-[10px] w-[100%]"> 
                    <input value={input} onChange={(e)=>setInput(e.target.value)} className="h-[50px] w-[100%] pl-[15px] border-solid border-[1px] font-medium border-gray-500 rounded-[30px] hover:bg-[#f3f2ef]"type="text" placeholder='Start a post'/>
                </form>
            </div>
            <div className='flex justify-evenly pt-[10px]'>
                <PostIcon Icon={InsertPhotoIcon} text="Media" color="lightblue"/>
                <PostIcon Icon={CalendarMonthIcon} text="Event" color="rgb(204, 204, 0)"/>
                <PostIcon Icon={ArticleIcon} text="Write Article" color="rgb(255, 191, 128)"/>
            </div>
        </div>
        {/* line */}
        <div className='border-b-[1px] border-solid border-gray-400 mt-[20px] mb-[20px]'></div>
        {/* Posts */}
        <FlipMove>
            {posts.map(({id,data:{name,description,message,timestamp,photoURL}})=>(
                <Post key={id} link={photoURL} name={name} time={timestamp} title={description} content={message}/>
            ))}
        </FlipMove>
    </div>
  )
}

export default MiddleSection

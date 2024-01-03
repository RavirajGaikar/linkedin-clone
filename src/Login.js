import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {auth,db} from './firebase';
import {login} from './features/userSlice';
import './LeftSection.css';

function Login() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [profilePic,setProfilePic] = useState('');
  const [description,setDescription] = useState('');
  const dispatch = useDispatch();

  

  const onSubmit=(e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password).then(
      (userAuth)=>{
        db.collection('info').where('email', '==', userAuth.email).get()
          .then((querySnapshot) => {
            const mydocument = querySnapshot.docs[0]?.data(); // Optional chaining
            const mydescription = mydocument?.description;

            dispatch(
              login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoURL,
                description : mydescription,
              })
            );
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        
      }).catch(error => alert("Welcome"));
  };

  const Register=(e)=>{
    if(!name){
      return alert("Please enter your name");
    }

    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:profilePic,
      })
      .then(()=>{db.collection("info").add({
        email:userAuth.user.email,
        description:description,
    });
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:name,
        photoUrl:profilePic,
        description : description,
      }));
      });
    }).catch((error)=>alert(error));

  };

  return (
    <div className='grid py-[100px] mx-auto place-items-center'>
      <img className='h-[70px] object-contain my-[20px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="Linkedin Image"/>
      <form className='formclass flex flex-col' onSubmit={onSubmit}>
        <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='Enter Name(When Registering)'/>
        <input value={email} onChange={(e)=> setEmail(e.target.value)}  type='email' placeholder='abc@xyz.com'/>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password'/>
        <input value={profilePic} onChange={(e)=> setProfilePic(e.target.value)}  type='text' placeholder='Enter profile URL(When Registering)'/>
        <input value={description} onChange={(e)=>setDescription(e.target.value)} type='text' placeholder='Enter Description(When Registering)'/>
        <button className='w-[365px] h-[50px] text-lg text-white bg-[#0074b1] rounded-[5px]' onSubmit={onSubmit}>Login</button>
      </form>
      <p className='mt-[20px]'>Not a member?{' '}
        <span className='text-[#0177b7] cursor-pointer' onClick={Register}>Register now</span></p>
    </div>
  );
}

export default Login;

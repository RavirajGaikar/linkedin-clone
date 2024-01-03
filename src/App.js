import React, { useEffect } from 'react';
import Header from './Header.js';
import LeftSection from './LeftSection.js';
import MiddleSection from './MiddleSection.js';
import RightSection from './RightSection.js';
import Login from './Login.js';
import {useDispatch,useSelector} from 'react-redux';
import {login,logout,selectUser} from './features/userSlice';
import {auth,db} from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        db.collection('info').where('email', '==', userAuth.email).get()
          .then((querySnapshot) => {
            const mydocument = querySnapshot.docs[0]?.data(); // Use optional chaining
            const mydescription = mydocument?.description;

            dispatch(login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
              description: mydescription,
            }));
          })
          .catch((error) => {alert(error);
          });
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div>
        <Header/>
        {!user ? (
          <Login/>
        ): (
          
          <div className="flex pt-6 px-[100px] min-h-screen bg-[#f3f2ef]">
            <LeftSection/>
            <MiddleSection/>
            <RightSection/>
          </div>
        )}
        
        
    </div>
  );
}

export default App;

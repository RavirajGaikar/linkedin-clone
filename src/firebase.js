import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDLXr_60hE_DxfU9MJxyauV_qyZOMnSX1k",
    authDomain: "linkedin-clone-12361.firebaseapp.com",
    projectId: "linkedin-clone-12361",
    storageBucket: "linkedin-clone-12361.appspot.com",
    messagingSenderId: "543215138903",
    appId: "1:543215138903:web:437cdf5c01016cdb950b12"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
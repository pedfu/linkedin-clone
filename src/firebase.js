import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQBy9JPFff9dOwcamnV3_RBon9TfI0tpY",
    authDomain: "linkedin-736bd.firebaseapp.com",
    projectId: "linkedin-736bd",
    storageBucket: "linkedin-736bd.appspot.com",
    messagingSenderId: "317473636946",
    appId: "1:317473636946:web:b1e6d90d82c3c0a042d58b",
    measurementId: "G-PN1CPZGB7Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth, db } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      } else {
        dispatch(logout());
      }
    })
  }, [])

  return (
      <>
        
      {!user ? (

        <div className='loginPage'>
          <Login />
        </div>        
        
        ) : (
        <div className='app'>

          <div className='app__header'>
            <Header />
          </div>
      
          <div className='app__body'>
            <Sidebar className="app__sidebar" />
            <Feed className="app__feed" />
            <Widgets text="Prévia da inflação é a mais alta para abril em 27 anos"/>
          </div>

        </div>      
      )}

      </>
  );
}

export default App;

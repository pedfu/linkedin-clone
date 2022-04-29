import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Feed.css';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
import PopupInput from './PopupInput';
import { db, auth } from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed(props) {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [popup, setPopup] = useState(false); 
  const [input, setInput] = useState("");


  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => ( 
      setPosts(snapshot.docs.map(doc => {
        return (          
          {
            id: doc.id,
            data: doc.data(),
          }
         
    )})) 
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL,
      comments: [],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    
    setInput("");
    setPopup(false);
  }

  const updateInput = (value) => {
    setInput(value);
  }

  function buttonIcon(Icon, title, color) {
    return (
      <div className='feed__buttonIcon'>
        <Icon style={{color: color}} />
        <p>{title}</p>
      </div>
    )
  }

  return (
    <div className='feed'>

        

        <div className='feed__inputContainer'>
            <Avatar className='sidebar__avatar' src={user.photoURL} sx={{ height: '45px', width: '45px' }} />
            <div className='feed__input' onClick={() => setPopup(true)}><p>Start a post</p></div>
        </div>
        <div className='feed__buttonIcons'>
          {buttonIcon(ImageIcon, 'Photo', '#70b5f9')}
          {buttonIcon(VideoLibraryIcon, 'Video', '#7fc15e')}
          {buttonIcon(EventIcon, 'Event', '#e7a33e')}
          {buttonIcon(NewspaperIcon, 'Write article', '#fc9295')}
        </div>
        <div className='feed__posts'>
          <FlipMove>
            {posts.map(({ id, data: {name, description, message, photoUrl } }) => {
              return (
                <div key={id} className='feed__post'>
                  <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
              </div>
              )
            })}
          </FlipMove>

          <div className='app__popup'>
            <PopupInput trigger={popup} closeMethod={() => setPopup(false)} updateInput={updateInput} sendPost={sendPost}/>
          </div>
        </div>
    </div>
  )
}

export default Feed
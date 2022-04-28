import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './Feed.css';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PopupInput from './PopupInput';

function Feed() {

  const [popup, setPopup] = useState(false); 

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
        <PopupInput trigger={popup}/>

        <div className='feed__inputContainer'>
            <Avatar className='sidebar__avatar' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" sx={{ height: '45px', width: '45px' }} />
            <div className='feed__input' onClick={() => setPopup(true)}><p>Start a post</p></div>
        </div>
        <div className='feed__buttonIcons'>
          {buttonIcon(ImageIcon, 'Photo', '#70b5f9')}
          {buttonIcon(VideoLibraryIcon, 'Video', '#7fc15e')}
          {buttonIcon(EventIcon, 'Event', '#e7a33e')}
          {buttonIcon(NewspaperIcon, 'Write article', '#fc9295')}
        </div>
    </div>
  )
}

export default Feed
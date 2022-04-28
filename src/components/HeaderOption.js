import React from 'react'
import './HeaderOption.css';
import { Avatar } from '@mui/material';

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
        {avatar && <Avatar className='headerOption__icon' src={avatar} alt="Profile Picture" />}
        {Icon && <Icon className="headerOption__icon" />}
        {title && <h3 className='headerOption__title'>{title}</h3>}
    </div>
  )
}

export default HeaderOption;
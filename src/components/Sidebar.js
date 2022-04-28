import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (recentItem) => {
        return (
            <div className='sidebar__recentItem'>
                <span>#</span>
                <p>{recentItem}</p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <Avatar className='sidebar__avatar' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" sx={{ height: '60px', width: '60px' }}/>
            <h2>Pedro Fuziwara</h2>
            <h4>fuziwarapedro@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who visited you</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,448</p>
            </div>
        </div>

        <div className='sidebar__connections'>
            <div>
                <p className='sidebar__connectionsTitle'>Connections</p>
                <p className='sidebar__connecitonsNumber'>3</p>
            </div>            
            <p className='sidebar__connectionsDesc'>Find alumni and classmates</p>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('react')}
            {recentItem('react')}
            {recentItem('react')}
            {recentItem('react')}
            {recentItem('react')}
            {recentItem('react')}
        </div>
    </div>
  )
}

export default Sidebar
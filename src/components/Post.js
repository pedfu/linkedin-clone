import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';

function Post({src, name, description, text, imagesURL}) {
  return (
    <div className='post'>
        <div className='post__container'>
            <div className='post__header'>
                <Avatar src={src}/>
                <h4 className='post__title'>{name}</h4>
                <p>{description}</p>
            </div>
            <div className='post__post'>
                <p>{text}</p>
                {imagesURL.map(url => {
                    return (
                        <img src={url} />
                    )
                })}
            </div>

            {/* LIKES */}
            {/* OPCOES -> COMMENT, LIKE, SHARE, SEND */}
            {/* COMMENTARIES */}
        </div>
    </div>
  )
}

export default Post
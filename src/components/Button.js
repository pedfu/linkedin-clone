import React from 'react';
import './Button.css';

function Button({Icon, title, onClick}) {
  return (
    <div className='button' onClick={onClick}>
        <div 
        className="button__container">
            <div className='button__btn'>
                <Icon />
                <h5>{title}</h5>
            </div>        
        </div>
    </div>
  )
}

export default Button
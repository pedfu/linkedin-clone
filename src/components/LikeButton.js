import React, { useState } from 'react';
import './LikeButton.css';

function LikeButton({Icon, title}) {

    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected(!selected);
    }

  return (
    <div className='likeButton'>
        <div 
        className="likeButton__container" 
        onClick={toggleSelected}>
            {selected ? 
            <div className='likeButton__btn likeButton__buttonActive'>
                <Icon />
                <h5>{title}</h5>
            </div> 
            :
            <div className='likeButton__btn'>
                <Icon />
                <h5>{title}</h5>
            </div>             
            }
        </div>
    </div>
  )
}

export default LikeButton
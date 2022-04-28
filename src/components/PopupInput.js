import React from 'react';
import './PopupInput.css';
import CloseIcon from '@mui/icons-material/Close';

function PopupInput({trigger}) {
    return (trigger ? (
        <div className='popupInput'>
                    <div className='popupInput__'>
                        <div className='popupInput__firstRow'>
                            <h3>Create a post</h3>
                            <CloseIcon className='popupInput__close'/>
                        </div>
                    </div>
                </div>
    ) : "")
}

export default PopupInput
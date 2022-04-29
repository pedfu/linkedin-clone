import React, { useEffect, useState } from 'react';
import './PopupInput.css';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TopicIcon from '@mui/icons-material/Topic';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function PopupInput({trigger, src, name="User", closeMethod, sendPost, updateInput}) {

    const[text, setText] = useState("");
    const[classPost, setClassPost] = useState("popupInput__post popupInput__postGray");
    const user = useSelector(selectUser);

    useEffect(() => {
        setClassPost("popupInput__post popupInput__postGray");
    }, [])

    function handleChange(e) {
        setText(e.target.value);
        updateInput(e.target.value);
        if(text.length > 1 && (text !== "")) {
            setClassPost("popupInput__post");
        } else {
            setClassPost("popupInput__post popupInput__postGray")
        }
    }

    function addHashtag() {
        if(text) {
            setText(text + " #");
        } else {
            setText("#");
        }
    }

    function popupIcon(Icon, title) {
        return (
            <div id="icon" className='popupIcon'>
                <Icon title={title}/>
                <div id="onhovericon">{title}</div>
            </div>
        )
    }

    return (trigger ? (
        <div className='popupInput'>
                    <div className='popupInput__container'>
                        <div className='popupInput__firstRow'>
                            <h3>Create a post</h3>
                            <CloseIcon onClick={closeMethod} className='popupInput__close'/>
                        </div>
                        <div className='popupInput__avatar'>
                            <Avatar src={user.photoURL} />
                            <h4>{user.displayName}</h4>
                        </div>
                        <form method='post'>
                            <div className='popupInput__textArea'>
                                <textarea name="textarea" value={text} onChange={handleChange} rows="8" cols="40" type="textarea" placeholder='What do you want to talk about?'></textarea>
                                <a onClick={addHashtag}>Add hashtag</a>
                            </div>
                            <div className='popupInput__Options'>

                                <div className='popupInput__icons'>
                                    {popupIcon(ImageIcon, "Add a photo")}
                                    {popupIcon(VideoLibraryIcon, "Add a video")}
                                    {popupIcon(TopicIcon, "Add a document")}
                                    {popupIcon(BusinessCenterIcon, "Share that you're hiring")}
                                    {popupIcon(CelebrationIcon, "Celebrate a occasion")}
                                    {popupIcon(EqualizerIcon, "Create a poll")}
                                    {popupIcon(MoreHorizIcon, "Add to your post")}
                                </div>
                                
                                <div className='popupInput__lastOptions'>
                                    <a><ChatIcon fontSize="small" /> <span>Anyone</span></a>
                                    <a className={classPost} type="submit" role="submit" onClick={(e) => {sendPost(e); setText("")}}>Post</a>
                                </div>
                                    
                            </div>
                        </form>
                    </div>
                </div>
    ) : "")
}

export default PopupInput
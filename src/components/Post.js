import { Avatar } from '@mui/material';
import './Post.css';
import LikeButton from './LikeButton';
import Button from './Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import { forwardRef, useEffect, useRef, useState } from 'react';
import Comment from './Comments';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../firebase';
import { child, ref, get } from "firebase/database";

const Post = forwardRef( ({id, src, name, description, message, photoUrl, comments=[]}, ref) => {

    const textarea = useRef(null);
    const user = useSelector(selectUser);
    const [text, setText] = useState("");
    const [input, setInput] = useState("");
    const [commentList, setCommentList] = useState(comments);


    const handleSubmit = () => {
        setInput(text);
        setText("");


        const commentsFromDB = () => {
            setCommentList([...commentList, {name:user.displayName, message:input, photoURL:user.photoURL}]);

            //update no db
            db.collection('posts').doc(id+'').set({
                comments: comments
            })

            console.log(comments);
        } 
        commentsFromDB();        
    }

    const renderImg = () => {
        if(src  && src !== "") {
            if(typeof src === 'string') {
                return (<div className='post__image'>
                            <img className='' src={src} alt="photo" />
                        </div>)
            } else {
                return (
                    src.map((url, index) => {
                        return (
                            <div key={index} className='post__image'>
                                <img className='' src={url} alt="photo" />
                            </div>
                        )
                    })
                )
            }
        }
        return;
    }

  return (
    <div ref={ref} className='post'>
        <div className='post__container'>
            <div className='post__header'>
                <Avatar src={photoUrl}/>
                <div>
                    <h4 className='post__title'>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post__post'>
                <p>{message.length > 150 ? message.substring(0, 150) + "..." : message}</p>
                {renderImg()}
                <div className='post__buttons'>
                    <LikeButton Icon={ThumbUpIcon} title="Like" />
                    <Button Icon={CommentIcon} title="Comment" />
                    <Button Icon={ShareIcon} title="Share" />
                    <Button Icon={SendIcon} title="Send" onClick={handleSubmit}/>
                </div>
            </div>

            <div className='post__commentInput'>
                <Avatar src={user.photoURL} />
                <form>
                    <div className='post__input'>
                        <textarea name='comment' value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a comment..." className="post__inputTextarea" ref={textarea}></textarea>
                        <div className='post__inputAddImage'>
                            <ImageIcon className='post__imageButton'/>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className='post__comments'>
                {commentList.map(comment => {
                    return (
                        <Comment photoURL={comment.photoURL} name={comment.displayName} message={comment.message} />
                    )
                })}
                <Comment />
            </div>
            {/* COMMENTARIES */}
        </div>
    </div>
  )
})

export default Post
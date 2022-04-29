import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './Comments.css';

function Comment({photoURL="https://i.pinimg.com/736x/6f/1e/fb/6f1efb3e2f7ddb6f6b9a3dbefabe0c67.jpg", name="PedroPedroPedroPedroPedroPedroPedro", message="This is a test message"}) {

    return (
        <List sx={{ width: '100%', maxWidth: 480 }} className="comments">
          <ListItem alignItems="flex-start" className='comments__li' >
            <ListItemAvatar>
              <Avatar alt="Avatar" src={photoURL} />
            </ListItemAvatar>
            <div className='comments__comment'>                
                <h5>{name.length > 30 ? name.substring(0, 30) + "..." : name}</h5>
                <p>{message}</p>
            </div>
          </ListItem>
        </List>
      );
}

export default Comment
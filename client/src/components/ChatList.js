import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {getUsers} from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  const [users, setUsers] = useState([])

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("currentUser")).nickname;
    getUsers(username)
    .then(res => setUsers(res.data))
  })

  const setChatBuddy = (e) => {
    console.log(e.target.textContent);
    localStorage.setItem("currentChatBuddy", e.target.textContent);
    props.chatSetter(e.target.textContent);
  }
  return (
    <List className={classes.root}>
      <Divider variant="inset" component="li" />



    {users && users.map((user) => (
      
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText style={{ cursor: "pointer" }} onClick={setChatBuddy}
          primary={user.nickname}
          name = {user.nickname}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
            </React.Fragment>
          }
        />
        
      </ListItem>

    )
    )} 
    </List>
  );
}

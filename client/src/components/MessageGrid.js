import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChatWindow from './ChatWindow';
import ChatList from './ChatList';
import MessageSearch from './MessageSearch';
import MessageSearchBtn from './MessageSearchBtn'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: "2%",
    marginTop: "2%",
    marginLeft: "2%",
    marginRight: "2%",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const [chatBuddy, setChatBuddy] = useState()
  const [searchedUser, setSearchedUser] = useState("")

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}><MessageSearch setSearchedUser={setSearchedUser}></MessageSearch></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><h2>Select Your Chat Buddy</h2><p style={{color: "green"}}><b>Only you and your chat buddy can see each other's messages</b></p><ChatList searchedUser={searchedUser} chatSetter={setChatBuddy}></ChatList></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><ChatWindow chatGetter={chatBuddy} chatSetter={setChatBuddy}></ChatWindow></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

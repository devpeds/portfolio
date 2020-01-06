import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Zoom, Fab } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';

const styles = (theme) => ({
  button: {
    position: "fixed",
    width: 90,
    height: 90,
    zIndex: 100,
    right: 25,
    bottom: 25,
    color: "white",
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[400],
    }
  },
  icon: {
    fontSize: 45,
    paddingLeft: 10,
    transform: "rotate(200deg)"
  }
});

const mailButton = ({ classes, mail }) => (
  <Zoom in={Boolean(mail)}>
    <Fab className={classes.button} href={`mailto:${mail}`}>
      <SendIcon className={classes.icon}/>
    </Fab>
  </Zoom>
);

export default withStyles(styles)(mailButton)

import React from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const styles = {
  root: {
    height: "100vh"
  },
  icon: {
    fontSize: 80
  }
}

const error = () => (
  <Grid
    justify="center"
    alignItems="center"
    direction="column"
    style={styles.root}
    container>
    <ErrorOutlineIcon color="disabled" style={styles.icon}/>
    <br/>
    <Typography variant="h6">Server Error</Typography>
    <Typography variant="body1" color="textSecondary">
      An error occured in the application
    </Typography>
    <Typography variant="body1" color="textSecondary">
      and your page could not be served.
    </Typography>
  </Grid>
)

export default error;

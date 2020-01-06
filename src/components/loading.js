import React from 'react';
import {
  CircularProgress,
  Grid
} from '@material-ui/core';

const style = {
  height: "100vh"
}

const loading = () => (
  <Grid
    justify="center"
    alignItems="center"
    style={style}
    container>
    <CircularProgress color="primary" size={120}/>
  </Grid>
)

export default loading;

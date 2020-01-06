import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Divider,
    Typography
} from '@material-ui/core';

const styles = (theme) => ({
    root: {
        padding: "25px 0"
    }
});

const footer = ({ classes }) => (
  <Fragment>
      <Divider/>
      <Grid className={classes.root} container justify="center">
          <Typography
              align="center"
              variant="caption"
              color="textSecondary">
              © 2020 Seunghoon Jung. All Rights Reserved
          </Typography>
      </Grid>
  </Fragment>
)

export default withStyles(styles)(footer);

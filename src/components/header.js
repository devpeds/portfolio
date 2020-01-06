import React from 'react';
import {
  Grid,
  Avatar,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    marginBottom: 20,
    backgroundColor: theme.palette.primary.main
  },
  profileImg: {
    position: "relative",
    marginTop: 45,
    backgroundColor: "#fbfbfb",
    width: 180,
    height: 180,
    [theme.breakpoints.up('md')]: {
      top: 30,
      margin: "30px 0 10px 0"
    }
  },
  profileTxt: {
    margin: "10px 0",
    [theme.breakpoints.down('md')]: {
      textAlign: "center"
    }
  },
  name: {
    lineHeight: 1.5
  }
});

const header = ({ classes, profile }) => (
  <Grid
    className={classes.root}
    container
    justify="space-evenly"
    alignItems="flex-end"
  >
    <Grid
      container
      item
      justify="center"
      md={3}
    >
      <Avatar
        className={classes.profileImg}
        src={profile.image}
        alt="profile image"
      />
    </Grid>
    <Grid
      className={classes.profileTxt}
      item
      md={8}
    >
      <Typography className={classes.name} variant="h4" color="textSecondary">{profile.name}</Typography>
      <Typography color="textSecondary">{profile.jobTitle}</Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(header);

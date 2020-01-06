import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Bios from './bios';
import Projects from './projects';

const styles = (theme) => ({
  content: {
    padding: theme.spacing(1.5)
  },
  project: {
    minHeight: 500,
  }
});

class Contents extends Component {
  render() {
    const { classes, bios, projects } = this.props
    return (
      <Grid container>
        <Grid className={classes.content} container item md={3}>
          <Bios bios={bios}/>
        </Grid>
        <Grid
          className={`${classes.content} ${classes.project}`}
          direction="column"
          container
          item
          md={9}
        >
          <Projects projects={projects}/>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Contents);

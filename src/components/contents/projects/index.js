import React, { Component, Fragment } from 'react';
import {
  Typography,
  Divider
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import CategoryTabs from './category-tabs';
import ProjectList from './project-list';

const styles = (theme) => ({
  title: {
    lineHeight: 1.5,
    color: theme.palette.text.secondary,
    paddingBottom: 5
  }
})

class Projects extends Component {
  render() {
    const { classes, projects } = this.props;
    return (
      <Fragment>
        <Typography
          className = { classes.title }
          variant="h3"
        >
          Projects
        </Typography>
        <Divider/>
        <br/>
        <ProjectList projects={projects}/>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Projects);

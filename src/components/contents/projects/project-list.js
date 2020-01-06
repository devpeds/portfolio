import React, { Component } from 'react';
import {
    List,
    ListItem
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ProjectItem from './project-item';

const styles = theme => ({
    root: {
        width: "100%",
        padding: 0
    },
    item: {
        padding: "10px 0"
    }
});

class ProjectList extends Component {
  render() {
    const { classes, projects } = this.props;

    return (
      <List className={classes.root}>
        {
          projects.map((project) =>(
            <ListItem className={classes.item} key={project.id}>
              <ProjectItem project={project}/>
            </ListItem>
          ))
        }
      </List>
    )
  }
}

export default withStyles(styles)(ProjectList);

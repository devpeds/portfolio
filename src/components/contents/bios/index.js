import React, { Component } from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  ExpandLess,
  ExpandMore
} from '@material-ui/icons';

import BioList from './bio-list';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: 'fit-content'
  },
  content: {
    padding: 0
  }
});

class Bios extends Component {
  state = {
    open: true
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes, bios } = this.props;
    const { open } = this.state;
    return (
      <Paper className={classes.root} elevation={5}>
        <List className={classes.content}>
          <ListItem button onClick={this.toggleOpen}>
            <ListItemText primary="Biography"/>
            { open ? <ExpandLess/> : <ExpandMore/> }
          </ListItem>
          <Divider/>
          <Collapse in={open}>
            <BioList bios={bios}/>
          </Collapse>
        </List>
      </Paper>
    )
  }
}

export default withStyles(styles)(Bios);

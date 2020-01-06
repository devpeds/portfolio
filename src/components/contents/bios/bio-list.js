import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import BioItem from './bio-item';

class BioList extends Component {
  addItems = (bios) => {
    if (bios.length === 0) {
      return (
        <ListItem>
          <ListItemText primary="No Information"/>
        </ListItem>
      )
    }
    return bios.map((bio) => <BioItem key={bio.id} bio={bio}/>)
  }

  render() {
    const { bios } = this.props;
    return (
      <List dense>
        {this.addItems(bios)}
      </List>
    )
  }
}


export default BioList;

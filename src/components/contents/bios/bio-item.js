import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@material-ui/core';
import {
  School,
  Work
} from '@material-ui/icons';

const icon = (type) => (
  type==="edu" ? <School/> : <Work/>
);

const bioItem = ({ bio }) => (
  <ListItem key={bio.id}>
    <ListItemAvatar>
      <Avatar>{icon(bio.type)}</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={bio.title}
      secondary={bio.subtitle}
    />
  </ListItem>
)

export default bioItem;

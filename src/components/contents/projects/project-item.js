import React, { Component, Fragment } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Link
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    width: "100%"
  },
  tags: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    }
  }
});

const subtitle = (title) => (
  <Typography variant="h6">{title} : </Typography>
)

const ul = (list) => (
  <ul>
    {list.map((item, index) => (
      <li key={index}>
        <Typography variant="body1" gutterBottom>{item}</Typography>
      </li>
    ))}
  </ul>
)

const content = (title, list) => (
  <Fragment>
    {subtitle(title)}
    {ul(list)}
    <br/>
  </Fragment>
)

const chips = (tags) => (
  tags.map((tag, index) => <Chip key={index} label={tag} color="primary"/>)
)

class ProjectItem extends Component {
  render() {
    const { classes, project } = this.props;
    const { title, date, about, features, url, tags } = project
    return (
      <Card className={classes.root} key={project.id} raised>
        <CardHeader
          title={title}
          subheader={date}
          action={
            <IconButton
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link/>
            </IconButton>
          }
        />
        <CardContent>
          <Divider/>
          <br/>
          {subtitle("About")}
          <Typography variant="body1" gutterBottom>{about}</Typography>
          <br/>
          {content("Features", features)}
          <Divider/>
          <br/>
          <div className={classes.tags}>{chips(tags)}</div>

        </CardContent>
      </Card>
    )
  }
}


export default withStyles(styles)(ProjectItem);

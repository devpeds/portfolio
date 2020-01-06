import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tooltip, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = (theme) => ({
  root: {
    position: "absolute",
    top: "2.2%",
    right: "2%"
  },
  icon: {
    padding: 5
  },
  link: {
    color: "inherit"
  }
});

const icon = (name) => (
  <FontAwesomeIcon icon={["fab", name]} size="lg"/>
);

const a = (className, url, name) => (
  <a
    className={className}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon(name)}
  </a>
)

const iconButton = (classes, social, index) => {
  const { siteName, iconName, url } = social;
  const isEmpty = !url;
  return (
    <Tooltip
      key = {index}
      title = {isEmpty ? `No account` : `Go to ${siteName}`}
    >
      <span>
        <IconButton
          className={classes.icon}
          disabled={isEmpty}
        >
          { isEmpty ? icon(iconName) : a(classes.link, url, iconName) }
        </IconButton>
      </span>
    </Tooltip>
  )
}

const navigator = ({ classes, socials }) => (
  <div className={classes.root}>
    { socials.map((social, index) => iconButton(classes, social, index)) }
  </div>
);

export default withStyles(styles)(navigator)

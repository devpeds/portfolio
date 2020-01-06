import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme
 } from '@material-ui/core/styles';

 import { library } from '@fortawesome/fontawesome-svg-core';
 import { fab } from '@fortawesome/free-brands-svg-icons';

import LoadingPage from './loading';
import ErrorPage from './error';
import Navigator from './navigator';
import Header from './header';
import Contents from './contents';
import MailButton from './mail-button';
import Footer from './footer';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#e4e7f7"
    }
  }
});

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    fetch("/api/me")
      .then((res) => res.json())
      .then((json) => this.setState({ me: json }) )
      .catch((err) => {
        console.warn(err)
        this.setState({ error: true })
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <LoadingPage/>
    }

    if (this.state.error) {
      return <ErrorPage/>
    }

    const { socials, bios, projects, ...profile } = this.state.me;
    const socialList = [
      {siteName: "GitHub", iconName: "github", url: socials.github},
      {siteName: "LinkedIn", iconName: "linkedin", url: socials.linkedin},
      {siteName: "Facebook", iconName: "facebook", url: socials.facebook},
    ]
    return (
      <MuiThemeProvider theme={theme}>
        <Navigator socials={socialList}/>
        <Header profile={profile}/>
        <Contents bios={bios} projects={projects}/>
        <MailButton mail={socials.email}/>
        <Footer />
      </MuiThemeProvider>
    )
  }
}

library.add(fab);
export default App;

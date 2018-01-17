import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './Login'
import Main from './Main'


export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key='login' component={Login} />
          <Scene key='main' component={Main} />
        </Stack>
      </Router>
    );
  }
}


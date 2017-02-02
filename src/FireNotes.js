// @flow

import React, { Component } from 'react';
import AuthRequested from './AuthRequested';
import LoginContainer from './Auth/LoginContainer';
import * as Actions from './Auth/LoginActions';
import Navbar from './Navbar/Navbar';

type Props = {
  children: Array<ReactClass<>>,
  dispatch: Function,
  auth: boolean,
  user: Object,
}

export class FireNotes extends Component {
  props: Props;

  onLogout = () => {
    this.props.dispatch(Actions.logout());
  }

  render() {
    return (
      <div>
        <Navbar onLogout={this.onLogout} auth={this.props.auth} user={this.props.user} />
        {this.props.children}
      </div>
    )
  }
}

export default AuthRequested(FireNotes, LoginContainer);

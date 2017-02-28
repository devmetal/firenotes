// @flow

import React, { Component } from 'react';
import AuthRequested from './AuthRequested';
import LoginContainer from './Auth/LoginContainer';
import Navbar from './Navbar/Navbar';

import type { User } from './types';

type Props = {
  children?: React.Element<*>,
  logout: () => void,
  login: () => void,
  auth: boolean,
  user: User,
}

export class FireNotes extends Component<void, Props, void> {
  render() {
    const { auth, user, logout, login } = this.props;

    if (!auth) return <LoginContainer
      auth={auth}
      onLogin={login}
      user={user}
    />;

    return (
      <div className='fire-notes'>
        <Navbar
          onLogout={logout}
          auth={auth}
          user={user} />
        {this.props.children}
      </div>
    )
  }
}

export default AuthRequested(FireNotes);

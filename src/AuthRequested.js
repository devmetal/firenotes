// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './Auth/LoginActions';

type InjectedProps = {
  auth: boolean,
  logout: () => void,
}

function AuthRequested<T: *>(
  ComposedComponent: ReactClass < T & InjectedProps >,
): ReactClass < T > {
  class AuthRequestedComponent extends Component {
  componentDidMount() {
    this.props.listen();
  }

  render() {
    const { auth, loading, logout, login, ...rem} = this.props;
    if (loading === true) {
      return null;
    }

    return (
      <ComposedComponent
        {...rem}
        auth={auth}
        logout={logout}
        login={login}
      />
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  auth: auth.auth,
  user: auth.user,
  loading: auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  logout() { dispatch(Actions.logout()) },
  login() { dispatch(Actions.startAuth()) },
  listen() { dispatch(Actions.startListenToAuth()) },
});

return connect(mapStateToProps, mapDispatchToProps)(AuthRequestedComponent);
}

export default AuthRequested;

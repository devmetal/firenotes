// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './Auth/LoginActions';

function AuthRequested<T>(
  ComposedComponent: ReactClass<T>,
  LoginScreen: ReactClass<{}>
): ReactClass<{}> {

  class AuthRequestedComponent extends Component {

    componentDidMount() {
      this.props.dispatch(Actions.startListenToAuth());
    }

    render() {
      const { auth, loading } = this.props;
      if (loading === true) {
        return null;
      } else if (auth !== true) {
        return <LoginScreen />
      } else {
        return <ComposedComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth: auth.auth,
    user: auth.user,
    loading: auth.loading,
  })

  return connect(mapStateToProps)(AuthRequestedComponent);
}

export default AuthRequested;

// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from './LoginActions';
import Login from './LoginComponent';

type Props = {
  auth: boolean,
  user: Object,
  startListenToAuth: Function,
  startAuth: Function,
}

export class LoginContainer extends Component {
  props: Props;

  onAuth: () => void;

  constructor(props: Props) {
    super(props)

    this.onAuth = () => this.props.startAuth();
  }

  render() {
    return (
      <Login onAuth={this.onAuth} />
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  auth: auth.auth,
  user: auth.user,
})

const mapDispatchToProps = dispatch => ({
  startListenToAuth() { dispatch(Actions.startListenToAuth()) },
  startAuth() { dispatch(Actions.startAuth()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

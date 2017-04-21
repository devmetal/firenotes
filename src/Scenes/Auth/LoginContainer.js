// @flow

import React, { Component } from 'react';

type Props = {
  auth: boolean,
  user: Object,
  onLogin: Function,
}

export default class LoginContainer extends Component {
  props: Props;

  render() {
    const { onLogin } = this.props;
    return (
      <div className='login-container'>
        <button className="ui github button" onClick={onLogin}>
          <i className="github icon"></i>
          Login via Github
        </button>
      </div>
    )
  }
}

// @flow

import React from 'react';

const Login = (props: {onAuth: Function}) =>
  <button className="ui github button" onClick={props.onAuth}>
    <i className="github icon"></i>
    Github
  </button>

export default Login

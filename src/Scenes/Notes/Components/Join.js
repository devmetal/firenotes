// @flow

import React, { Component } from 'react';

type Props = {
  onJoin: (code: string) => void,
}

export default class Join extends Component {
  props: Props;
  
  submitHandler = () => {
    const code = this.refs.code.value;
    this.props.onJoin(code);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <form className="ui form">
            <div className="field">
              <label>Note share code</label>
              <input type="text" name="code" ref="code" defaultValue="" />
            </div>
          </form>
        </div>
        <div className="extra content">
          <div className="ui basic green button">Join</div>
        </div>
      </div>
    )
  }
};

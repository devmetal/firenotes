import React, { Component } from 'react';

import './CopyCode.css';

export default class CopyCode extends Component {
  render() {
    const { code } = this.props;
    return (
      <div className="ui label copy-button" data-content="Copy code">
        <i className="copy icon"></i> {code}
      </div>
    )
  }
}

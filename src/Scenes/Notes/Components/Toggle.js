// @flow

import React, { Component } from 'react';

type Props = {
  onToggle: () => void,
  on: boolean,
};

export default class Toggle extends Component {
  props: Props;

  render() {
    const { on, onToggle } = this.props;
    const button = (on) 
      ? <div onClick={onToggle} className="ui basic orange button">Close</div>
      : <div onClick={onToggle} className="ui basic green button">Open</div>

    return button;
  }
}

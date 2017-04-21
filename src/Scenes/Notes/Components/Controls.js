// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';

import Toggle from './Toggle';

type Props = {
  id: number,
  myOwn: boolean,
  closed: boolean,
  onToggle: (id: number, closed: boolean) => void,
  onDelete: (id: number) => void,
  onFork: (id: number) => void,
}

export default class Controls extends Component {
  props: Props;

  onDeleteHandler = () => {
    const { id } = this.props;
    this.props.onDelete(id);
  };

  onToggleHandler = () => {
    const { id, closed } = this.props;
    this.props.onToggle(id, closed);
  };

  onForkHandler = () => {
    const { id, closed } = this.props;
    this.props.onToggle(id, closed);
  };

  render() {
    const { myOwn, closed } = this.props;

    return (
      <div className="ui centered buttons">
        <Link to="/note" className="ui basic green button">View</Link>
        {myOwn && <Toggle onToggle={this.onToggleHandler} on={!closed} />}
        {myOwn && <div onClick={this.onDeleteHandler} className="ui basic red button">Delete</div>}
        {!myOwn && <div onClick={this.onForkHandler} className="ui basic green button">Fork</div>}
      </div>
    )
  }
}

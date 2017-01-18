import React, { Component } from 'react';
import nothing from './nothing.gif';

export default class NotFound extends Component {
  render() {
    return (
      <div className="ui center aligned container">
        <h1>Nothing to see here</h1>
        <img role="presentation" src={nothing} />
      </div>
    )
  }
}

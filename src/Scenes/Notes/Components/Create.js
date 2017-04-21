// @flow

import React, { Component } from 'react';

type Props = {
  onCreate: (title: string) => void,
}

export default class Create extends Component {
  props: Props;

  submitHandler = () => {
    const title = this.refs.title.value;
    this.props.onCreate(title);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <form className="ui form">
            <div className="field">
              <label>Title</label>
              <input type="text" name="title" ref="title" defaultValue="Untitled" />
            </div>
          </form>
        </div>
        <div className="extra content">
          <div onClick={this.submitHandler} className="ui basic green button">Create</div>
        </div>
      </div>
    )
  }
};

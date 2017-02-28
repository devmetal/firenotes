// @flow

import React, { Component } from 'react';
import { TextItem, LinkItem, HeaderItem } from './NavbarItem';

type Props = {
  auth: boolean,
  user: Object,
  onLogout: Function,
}

export default class extends Component {
  props: Props;

  render() {
    return (
      <div className="ui top menu navbar">
        <HeaderItem text="Fire In the notes" />
        <TextItem text={this.props.user.email} />
        <LinkItem className='logout' text="Logout" onClick={this.props.onLogout} />
      </div>
    )
  }
}



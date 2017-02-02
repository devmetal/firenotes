// @flow

import React, { Component } from 'react';

import Alarm from './Alarm';
import CopyCode from './CopyCode';
import Controls from './Controls';

type Props = {
  title: string,
  myOwn: boolean,
  notify: boolean,
  closed: boolean,
  desc: string,
  code: string,
  id: number,
  onToggle: (id: number, closed: boolean) => void,
  onFork: (id: number) => void,
  onDelete: (id: number) => void,
};

export default class Note extends Component {
  props: Props;
  
  render() {
    const { title, myOwn, code, notify, closed, desc, id } = this.props;
    const { onToggle, onFork, onDelete } = this.props;

    return (
      <div className="card">
        {notify && <Alarm />}
        <div className="content">
          <div className="header">
            {title}
          </div>
          {myOwn &&
            <div className="meta">
              <CopyCode code={code} />
            </div>
          }
          <div className="description">
            {desc}
          </div>
        </div>
        <div className="extra center aligned content">
          <Controls 
            id={id} 
            myOwn={myOwn} 
            closed={closed}
            onToggle={onToggle}
            onDelete={onDelete}
            onFork={onFork}
          />
        </div>
      </div>
    )
  }
}

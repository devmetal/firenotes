// @flow

import React from 'react';

type Props = {
  text: string,
  onClick?: Function
}

export const TextItem = (props: Props) => <div className="item" onClick={props.onClick || null}>{props.text}</div>
export const HeaderItem = (props: Props) => <div className="header item" onClick={props.onClick || null}>{props.text}</div> 
export const LinkItem = (props: Props) => <a className="item" onClick={props.onClick || null}>{props.text}</a>


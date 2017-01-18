//@flow

import React, { Component } from 'react';
import Note from './Note';

type Props = {
  onDelete: (id: number) => void,
  onToggle: (id: number) => void,
  onFork: (id: number) => void,
  notes: Array<Object>,
}

export default class NotesList extends Component {
  props: Props;

  render() {
    const { notes, onDelete, onFork, onToggle } = this.props;

    const createNote = (note) => (
      <Note
        onDelete={onDelete}
        onFork={onFork}
        onToggle={onToggle}
        title={note.title}
        myOwn={note.myOwn}
        code={note.code}
        notify={note.notify}
        closed={note.closed}
        desc={note.desc}
        key={note.id}
        id={note.id}
        />
    )

    return (
      <div className="ui centered cards">
        {notes.map(createNote)}
      </div>
    )
  }
}

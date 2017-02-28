// @flow

import React, { Component } from 'react';
import NotesList from './Components/NotesList';
import Create from './Components/Create';
import Join from './Components/Join';
import { connect } from 'react-redux';

import * as Actions from './NotesActions';
import { dateOrderNotes } from './NotesSelectors';

type Props = {
  dispatch: Function,
  watching: boolean,
  notes: Array<Object>,
};

export class NotesPanel extends Component {
  props: Props;

  onDeleteHandler = (id: number) => {
    this.props.dispatch(Actions.deleteNote(id));
  }
  
  onToggleHandler = (id: number, closed: boolean) => {
    this.props.dispatch(Actions.toggleNote(id, closed));
  }

  onForkHandler: (id: number) => void;
  
  onCreateHandler = (title: string) => {
    this.props.dispatch(Actions.addNote(title));
  }
  
  onJoinHandler = (code: string) => {
    this.props.dispatch(Actions.joinNote(code));
  }

  componentDidMount = () => {
    if (!this.props.watching) {
      this.props.dispatch(Actions.listenNotes());
    }
  }

  render() {
    const { notes } = this.props; 

    return (
      <div className="ui container">
        <div className="ui cards">
          <Create onCreate={this.onCreateHandler} />
          <Join onJoin={this.onJoinHandler} />
        </div>
        <NotesList
          onDelete={this.onDeleteHandler}
          onToggle={this.onToggleHandler}
          onFork={this.onForkHandler}
          notes={notes}
          />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    notes: dateOrderNotes(store),
    watching: store.notes.live,
  }
};

export default connect(mapStateToProps)(NotesPanel);

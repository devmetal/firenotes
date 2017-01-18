// @flow

import React, { Component } from 'react';
import NotesList from './Components/NotesList';
import Create from './Components/Create';
import Join from './Components/Join';
import { connect } from 'react-redux';

import * as Actions from './NotesActions';

type Props = {
  dispatch: Function,
  notes: Array<Object>,
};

class NotesPanel extends Component {
  props: Props;

  onDeleteHandler = (id: number) => {
    this.props.dispatch(Actions.deleteNote(id));
  }
  
  onToggleHandler = (id: number) => {
    this.props.dispatch(Actions.toggleNote(id));
  }

  onForkHandler: (id: number) => void;
  
  onCreateHandler = (title: string) => {
    this.props.dispatch(Actions.addNote(title));
  }
  
  onJoinHandler: (code: string) => void;

  componentDidMount = () => {
    this.props.dispatch(Actions.startListenToNotes());
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
    notes: store.notes.notes,
  }
};

export default connect(mapStateToProps)(NotesPanel);

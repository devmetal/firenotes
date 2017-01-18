import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'

import NotesPage from './NotesPage';
import NotePage from './NotePage';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={NotesPage} />
        <Route path="/note" component={NotePage} />
        <Route path="*" component={NotFound}/>
      </Router>
    );
  }
}

export default App;

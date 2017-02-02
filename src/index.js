import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import FireNotes from './FireNotes';
import NotesPage from './NotesPage';
import NotePage from './NotePage';
import NotFound from './NotFound';

import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={FireNotes}>
        <IndexRoute component={NotesPage} />
        <Route path="/note" component={NotePage} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

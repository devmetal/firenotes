import { combineReducers } from 'redux';
import notes from './Notes/NotesReducer';

const notesApp = combineReducers({ notes });

export default notesApp;
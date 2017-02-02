import { combineReducers } from 'redux';
import notes from './Notes/NotesReducer';
import auth from './Auth/LoginReducer';

const notesApp = combineReducers({ notes, auth });

export default notesApp;
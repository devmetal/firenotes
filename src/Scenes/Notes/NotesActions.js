import firebase from '../firebase';
import uuid from 'uuid/v4';

export const LIVE = 'LIVE';
export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const NOTE_VALUE = 'NOTE_VALUE';

const database = firebase.database();

export const addNote = (title) => {
  return (dispatch, getState) => {
    const id = uuid();

    const { auth: { user: {uid} } } = getState();

    const note = {
      id,
      uid,
      title,
      desc: "",
      notify: false,
      closed: false,
      createdAt: new Date().toISOString(),
    };

    database.ref(`/notes/${id}`).set(note).then(() => {
      return database.ref(`${uid}/notes`).push(id); 
    });
  }
};

export const joinNote = (code) => (dispatch, getState) => {
  const { auth: { user: {uid} }  } = getState();
  database.ref(`${uid}/joined`).push(code);
}

export const toggleNote = (id, closed) => {
};

export const deleteNote = (id) => {
};

export const updateNote = (note) => {
}

export const listenNote = (id) => (dispatch) => {
  database.ref(`notes/${id}`).on('value', (snapshot) => {
    const note = snapshot.val();
    console.log(snapshot);
    dispatch({type: NOTE_VALUE, id, note});
  });
}

export const listenNotes = () => {
  return (dispatch, getState) => {
    const { auth: { user: {uid} } } = getState();
    
    const addNote = (snapshot) => {
      const noteId = snapshot.val();
      const note = { id: noteId };

      dispatch({type: ADD_NOTE, note});
      dispatch(listenNote(noteId));
    }

    database.ref(`${uid}/notes`).on('child_added', addNote);
    database.ref(`${uid}/joined`).on('child_added', addNote);

    dispatch({type: LIVE});
  };
};

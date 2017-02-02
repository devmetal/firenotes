import firebase from '../firebase';
import uuid from 'uuid/v4';

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTES = 'ADD_NOTES';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

const database = firebase.database();

export const addNote = (title) => {
  return (dispatch, getState) => {
    const id = uuid();

    const { auth: { user: {uid} }  } = getState();

    const note = {
      id,
      title,
      uid,
      code: id,
      created: new Date(),
      desc: "",
      myOwn: true,
      notify: false,
      closed: false,
    };

    dispatch({ type: ADD_NOTE, note });
    database.ref(`${uid}/notes/${id}`).set(note);
  }
};

export const joinNote = (code) => {
  return (dispatch, getState) => {
    const { auth: { user: {uid} } } = getState();
    database.ref('notes/' + code).child('joined').push(uid)
  }
};

export const addNotes = (notes = []) => {
  return { type: ADD_NOTES, notes };
};

export const toggleNote = (id, closed) => {
  return (dispatch, getState) => {
    const { auth: { user: {uid} } } = getState();

    dispatch({ type: TOGGLE_NOTE, id, closed });
    database.ref(`${uid}/notes/${id}`).child('closed').set(!closed);
  }
};

export const deleteNote = (id) => {
  return (dispatch, getState) => {
    const { auth: { user: {uid} } } = getState();
    
    dispatch({ type: DELETE_NOTE, id });
    database.ref(`notes/${uid}/${id}`).remove();
  }
};

export const updateNote = (note) => {
  return { type: UPDATE_NOTE, id: note.id, note };
}

export const listenNotes = () => {
  return (dispatch, getState) => {
    const { auth: { user: {uid} }  } = getState();
    database.ref(`${uid}/notes`).once('value', (snapshot) => {
      const notesObj = snapshot.val();
      if (!notesObj) return;

      const keys = Object.keys(notesObj);
      const notes = keys.map(key => notesObj[key]);
      dispatch(addNotes(notes));
    });

    database.ref(`${uid}/notes`).on('child_changed', (snapshot) => {
      const note = snapshot.val();
      dispatch(updateNote(note));
    });
  }
};

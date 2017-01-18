import * as firebase from "firebase";

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTES = 'ADD_NOTES';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

firebase.initializeApp({
  databaseURL: "https://firenotes-91d1a.firebaseio.com",
});

const database = firebase.database();

export const addNote = (title) => {
  return { type: ADD_NOTE, note: {} };
};

export const addNotes = (notes = []) => {
  return { type: ADD_NOTES, notes };
};

export const toggleNote = (id) => {
  return { type: TOGGLE_NOTE, id };
};

export const deleteNote = (id) => {
  return { type: DELETE_NOTE, id };
};

export const startListenToNotes = () => {
  return (dispatch) => {
    database.ref('notes').once('value', (snapshot) => {
      const notes = [];
      snapshot.forEach((item) => {
        const key = item.key;
        const val = item.val();
        notes.push({...val, id: key, key});
      });
      dispatch(addNotes(notes));
    })
  }
};

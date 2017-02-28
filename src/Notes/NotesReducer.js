import { ADD_NOTE, TOGGLE_NOTE, DELETE_NOTE, UPDATE_NOTE, NOTE_VALUE, LIVE } from './NotesActions';

const note = (notes, action) => {
  return notes.map((note) => {
    if (note.id !== action.id) {
      return note;
    }

    switch (action.type) {
      case NOTE_VALUE: return { ...note, ...action.note, loaded: true };
      case TOGGLE_NOTE: return { ...note, closed: !action.closed };
      case UPDATE_NOTE: return { ...note, ...action.note };
      default:
        return note;
    }
  });
}

const notes = (state = { notes: [], live: false }, action) => {
  switch (action.type) {
    case LIVE: return { ...state, live: true }
    case ADD_NOTE: {
      const note = { ...action.note, loaded: false };
      return { ...state, notes: [note, ...state.notes] }
    }
    case DELETE_NOTE: return { ...state, notes: state.notes.filter(note => note.id !== action.id) }
    case UPDATE_NOTE:
    case TOGGLE_NOTE:
    case NOTE_VALUE:
      return { ...state, notes: note(state.notes, action) }
    default:
      return state;
  }
};

export default notes;

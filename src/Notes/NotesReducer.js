import { ADD_NOTE, TOGGLE_NOTE, ADD_NOTES, DELETE_NOTE } from './NotesActions';

const note = (notes, action) => {
  return notes.map((note) => {
    if (note.id !== action.id) {
      return note;
    }

    switch (action.type) {
      case TOGGLE_NOTE: return { ...note, closed: !note.closed };
      default:
        return note;
    }
  });
}

const notes = (state = { notes: [] }, action) => {
  switch (action.type) {
    case ADD_NOTES: return { ...state, notes: [...action.notes] };
    case ADD_NOTE: return { ...state, notes: [action.note, ...state.notes] }
    case DELETE_NOTE: return { ...state, notes: state.notes.filter(note => note.id !== action.id) }
    case TOGGLE_NOTE: return { ...state, notes: note(state.notes, action) }
    default:
      return state;
  }
};

export default notes;

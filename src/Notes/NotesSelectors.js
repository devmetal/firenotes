import { createSelector } from 'reselect';
import moment from 'moment';

const getNotes = state => state.notes.notes;

const getUser = state => state.auth.user;

export const filterLoadedNotes = createSelector(
  [getNotes],
  notes => notes.filter(note => note.loaded)
);

export const mapUserSelfNotes = createSelector(
  [filterLoadedNotes, getUser],
  (notes, user) => notes.map(note => ({...note, myOwn: note.uid === user.uid})),
);

export const dateOrderNotes = createSelector(
  [mapUserSelfNotes],
  (notes) => notes.sort((a, b) => {
    const ta = +moment(a.createdAt)
    const tb = +moment(b.createdAt)
    return tb - ta;
  })
);

import firedb from '../firebase';
import firebase from 'firebase';

export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_LOADED = 'AUTH_LOADED';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_START = 'AUTH_START';
export const LOGOUT = 'LOGOUT';

export const startListenToAuth = () => dispatch => {
  dispatch({ type: AUTH_LOADING });
  firedb.auth().onAuthStateChanged((user) => {
    dispatch({ type: AUTH_LOADED })
    if (user) dispatch({ type: AUTH_SUCCESS, user });
  });
}

export const startAuth = () => async (dispatch) => {
  dispatch({ type: AUTH_START });

  const ghProvider = new firebase.auth.GithubAuthProvider();
  const auth = firedb.auth();

  try {
    await auth.signInWithPopup(ghProvider);
  } catch (error) {
    dispatch({ type: AUTH_ERROR, error });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  firedb.auth().signOut();
};

import * as Actions from './LoginActions';

const defaultState = {
  auth: false,
  user: null,
  error: null,
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.AUTH_LOADING: return { ...state, loading: true }
    case Actions.AUTH_LOADED: return { ...state, loading: false }
    case Actions.AUTH_SUCCESS: return { ...state, listen: false, auth: true, user: action.user }
    case Actions.AUTH_START: return { ...state, auth: false, user: null }
    case Actions.AUTH_ERROR: return { ...state, listen: false, error: action.error }
    case Actions.LOGOUT: return { ...state, listen: false, auth: false, user: null }
    default:
      return state
  }
}

export default auth;

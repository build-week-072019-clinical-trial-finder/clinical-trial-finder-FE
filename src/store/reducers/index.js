import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOGOUT
} from '../actions/index';

export const initialState = {
  trials: [],
  isLoggingIn: false,
  isRegistering: false,
  isRegistered: false,
  isFetching: false,
  //isSaving: false,
  watchList: [],
  error: null,
  isLoggedIn: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START: 
      return {
        ...state,
        isRegistering: true,
        error: null
      }
    case REGISTER_SUCCESS: 
      return {
        ...state,
        isRegistering: false,
        isRegistered: true,
        error: null
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
        isRegistered: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        trials: action.payload,
        error: null
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        trials: [],
        isLoggingIn: false,
        isRegistering: false,
        isFetching: false,
        error: null,
        isLoggedIn: false
      }
    default: 
      return state;
  }
}
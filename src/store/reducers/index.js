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
  LOGOUT,
  FETCH_WATCHLIST_START,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_WATCHLIST_FAILTURE,
  ADD_WATCHLIST_START,
  ADD_WATCHLIST_SUCCESS,
  ADD_WATCHLIST_FAILURE,
  REMOVE_WATCHLIST_START,
  REMOVE_WATCHLIST_SUCCESS,
  REMOVE_WATCHLIST_FAILURE,
} from '../actions/index';

export const initialState = {
  trials: [],
  isLoggingIn: false,
  isRegistering: false,
  isRegistered: false,
  isFetching: false,
  error: null,
  isLoggedIn: false,
  isFetchingWatchlist: false,
  isAddingWatchlist: false,
  isRemovingWatchlist: false,
  watchlist: [],
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
        isRegistered: false,
        isFetching: false,
        error: null,
        isLoggedIn: false
      } 
    case FETCH_WATCHLIST_START:
      return {
        ...state,
        isFetchingWatchlist: true,
        error: null
      }
    case FETCH_WATCHLIST_SUCCESS:
      return {
        ...state,
        isFetchingWatchlist: false,
        watchlist: action.payload,
        error: null
      }
    case FETCH_WATCHLIST_FAILTURE:
      return {
        ...state,
        isFetchingWatchlist: false,
        error: action.payload
      }
    case ADD_WATCHLIST_START:
      return {
        ...state,
        isAddingWatchlist: true
      }
    case ADD_WATCHLIST_SUCCESS:
      return {
        ...state,
        isAddingWatchlist: false,
        error: null
      }
    case ADD_WATCHLIST_FAILURE:
      return {
        ...state,
        isAddingWatchlist: false,
        error: action.payload
      }
    case REMOVE_WATCHLIST_START:
      return {
        ...state,
        isRemovingWatchlist: true,
        error: null
      }
    case REMOVE_WATCHLIST_SUCCESS:
      return {
        ...state,
        isRemovingWatchlist: false,
        error: null
      }
    case REMOVE_WATCHLIST_FAILURE:
      return {
        ...state,
        isRemovingWatchlist: false,
        error: action.payload
      }
    default: 
      return state;
  }
}
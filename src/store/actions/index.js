import axios from "axios";
//import axiosWithAuth from '../../utilities/axiosWithAuth';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (history, credentials) => (dispatch) => {
  dispatch({
    type: REGISTER_START
  })
  return axios
    .post('https://clincal-trials.herokuapp.com/api/register', credentials)
    .then(response => {
      console.log('register user success: ', response)
      dispatch({
        type: REGISTER_SUCCESS,
      })
      history.push('/login')
    })
    .catch(error => {
      console.log('register user error: ', error)
      dispatch({
        type: REGISTER_FAILURE,
        payload: 'Error registering user. Please try again.'
      })
    })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (history, credentials) => (dispatch) => {
  dispatch({
    type: LOGIN_START
  })
  axios.post('https://clincal-trials.herokuapp.com/api/login', credentials)
    .then(response => {
      console.log('login success: ', response);
      dispatch({
        type: LOGIN_SUCCESS
      })
      localStorage.setItem('token', response.data.token)
      history.push('/Dashboard')
    })
    .catch(error => {
      console.log('login error: ', error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: 'Error logging in. Please try again'
      })
    })
}

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetch = () => (dispatch) => {
  dispatch({
    type: FETCH_START
  })
  axios.post('http://clinical-trial-dev.p5ykpijgyk.us-east-2.elasticbeanstalk.com/fetch_data', {})
    .then(response => {
      console.log('fetch trials success: ', response)
      let keys = Object.keys(response.data).filter(item => item !== 'status');
      let ids = Object.keys(response.data[keys[0]]);
      let data = ids.map(item => ({id: item}));
      keys.forEach(key => data = data.map(item => ({...item, [key]: response.data[key][item.id]})))
      dispatch({
        type: FETCH_SUCCESS,
        payload: data 
      })
    })
    .catch(error => {
      console.log('fetch trials error: ', error)
      dispatch({
        type: FETCH_FAILURE,
        payload: 'Error fetching trials. Please try again.'
      })
    })
}

export const LOGOUT = 'LOGOUT'

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}

export const FETCH_WATCHLIST = 'FETCH_WATCHLIST';

export const fetchWatchlist = () => (dispatch) => {
  let savedList = JSON.parse(localStorage.getItem('watchlist')) || [];
  dispatch({
    type: FETCH_WATCHLIST,
    payload: savedList
  })
}

export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';

export const addToWatchlist = (trial) => (dispatch) => {
  dispatch({
    type: ADD_TO_WATCHLIST,
    payload: trial
  })
}

export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export const removeFromWatchlist = (trial) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_WATCHLIST,
    payload: trial.id
  })
}
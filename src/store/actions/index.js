import axios from "axios";

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (credentials) => (dispatch) => {
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

export const login = (credentials) => (dispatch) => {
  dispatch({
    type: LOGIN_START
  })
  axios.post('https://clincal-trials.herokuapp.com/api/login', credentials)
    .then(response => {
      console.log('login success: ', response);
      dispatch({
        type: LOGIN_SUCCESS, //will add later
      })
      localStorage.setItem('token', response.data.token)
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

export const fetch = (keywords) => (dispatch) => {
  dispatch({
    type: FETCH_START
  })
  axios.get()
    .then(response => {
      console.log('fetch trials success: ', response)
      dispatch({
        type: FETCH_SUCCESS,
        payload: '' //will add later
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
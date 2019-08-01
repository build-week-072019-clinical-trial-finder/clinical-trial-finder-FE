import axios from "axios";
import axiosWithAuth from '../../utilities/axiosWithAuth';

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
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);
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
      let data = ids.map(item => ({trial_id: item}));
      keys.forEach(key => data = data.map(item => ({...item, [key]: response.data[key][item['trial_id']]})))
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

export const FETCH_WATCHLIST_START = 'FETCH_WATCHLIST_START';
export const FETCH_WATCHLIST_SUCCESS = 'FETCH_WATCHLIST_SUCCESS';
export const FETCH_WATCHLIST_FAILTURE = 'FETCH_WATCHLIST_FAILURE';

export const fetchWatchlist = () => (dispatch) => {
  let userId = localStorage.getItem('userId');
  dispatch({
    type: FETCH_WATCHLIST_START
  })
  axiosWithAuth().get(`https://clincal-trials.herokuapp.com/api/users/${userId}/watchlist`)
    .then(response => {
      console.log('fetch watchlist success: ', response)
      dispatch({
        type: FETCH_WATCHLIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('fetch watchlist failure: ', error)
      dispatch({
        type: FETCH_WATCHLIST_FAILTURE,
        payload: 'Error fetching watchlist'
      })
    })
}

export const ADD_WATCHLIST_START = 'ADD_WATCHLIST_START';
export const ADD_WATCHLIST_SUCCESS = 'ADD_WATCHLIST_SUCCESS';
export const ADD_WATCHLIST_FAILURE = 'ADD_WATCHLIST_FAILURE';

export const addToWatchlist = (trial) => (dispatch) => {
  let userId = parseInt(localStorage.getItem('userId'));
  let trialToAdd = {...trial};
  delete trialToAdd['trial_id'];
  delete trialToAdd['intervention_name'];
  //delete trialToAdd['brief_summary'];
  dispatch({
    type: ADD_WATCHLIST_START
  })
  axiosWithAuth().post(`https://clincal-trials.herokuapp.com/api/watchlist`, {...trialToAdd, users_id: userId})
    .then(response => {
      console.log('fetch watchlist success: ', response)
      dispatch({
        type: ADD_WATCHLIST_SUCCESS,
      })
      return axiosWithAuth().get(`https://clincal-trials.herokuapp.com/api/users/${userId}/watchlist`)
      .then(response => {
        console.log('fetch watchlist success: ', response)
        dispatch({
          type: FETCH_WATCHLIST_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log('fetch watchlist failure: ', error)
        dispatch({
          type: FETCH_WATCHLIST_FAILTURE,
          payload: 'Error fetching watchlist'
        })
      })
    })
    .catch(error => {
      console.log('fetch watchlist failure: ', error)
      dispatch({
        type: ADD_WATCHLIST_FAILURE,
        payload: 'Error adding trial to watchlist'
      })
    })
}

export const REMOVE_WATCHLIST_START = 'REMOVE_WATCHLIST_START';
export const REMOVE_WATCHLIST_SUCCESS = 'REMOVE_WATCHLIST_SUCCESS';
export const REMOVE_WATCHLIST_FAILURE = 'REMOVE_WATCHLIST_FAILURE';

export const removeFromWatchlist = (trial) => (dispatch) => {
  let userId = localStorage.getItem('userId');
  dispatch({
    type: REMOVE_WATCHLIST_START
  })
  axiosWithAuth().delete(`https://clincal-trials.herokuapp.com/api/watchlist/${trial.id}`)
    .then(response => {
      console.log('fetch watchlist success: ', response)
      dispatch({
        type: REMOVE_WATCHLIST_SUCCESS
      })
      return axiosWithAuth().get(`https://clincal-trials.herokuapp.com/api/users/${userId}/watchlist`)
      .then(response => {
        console.log('fetch watchlist success: ', response)
        dispatch({
          type: FETCH_WATCHLIST_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log('fetch watchlist failure: ', error)
        dispatch({
          type: FETCH_WATCHLIST_FAILTURE,
          payload: 'Error fetching watchlist'
        })
      })
    })
    .catch(error => {
      console.log('fetch watchlist failure: ', error)
      dispatch({
        type: REMOVE_WATCHLIST_FAILURE,
        payload: 'Error removing trial from watchlist'
      })
    })
}

export const check = () => (dispatch) => {
  axiosWithAuth().get(`https://clincal-trials.herokuapp.com/api/users`)
    .then(response => {
      console.log('test success:', response)
    })
    .catch(error => {
      console.log('test failure:', error)
    })
}
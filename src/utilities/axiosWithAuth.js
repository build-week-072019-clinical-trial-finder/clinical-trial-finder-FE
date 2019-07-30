import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('userToken');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
    baseURL: ''
  })
}

export default axiosWithAuth;
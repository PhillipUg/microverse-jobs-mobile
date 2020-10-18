import axios from 'axios';

const API_URL = 'https://microverse-jobs-api.herokuapp.com/api/v1/';

const register = (username, password) => axios.post(`${API_URL}users`, {
  username,
  password,
})
  .then(response => {
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });

const login = (username, password) => axios
  .post(`${API_URL}login`, {
    username,
    password,
  })
  .then(response => {
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
  // window.location.reload()
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

export default {
  register,
  login,
  logout,
  getCurrentUser,
};

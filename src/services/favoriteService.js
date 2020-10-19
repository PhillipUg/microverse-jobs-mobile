import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'https://microverse-jobs-api.herokuapp.com/api/v1/';

const updateFav = (user_id, job_id) => axios.put(`${API_URL}favorites/${job_id}`, {user_id, job_id}, { headers: authHeader() }) /*eslint-disable-line*/
  .then(response => response.data);

export default {
  updateFav,
};

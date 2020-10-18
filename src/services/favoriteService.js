import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'https://microverse-jobs-api.herokuapp.com/api/v1/';

const updateFav = (userId, jobId) => axios.put(`${API_URL}favorites/${jobId}`, {
  userId,
  jobId,
}, { headers: authHeader() })
  .then(response => response.data);

export default {
  updateFav,
};

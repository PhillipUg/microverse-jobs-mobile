import axios from 'axios';
import authHeader from './authActions';

export const getData = () => async dispatch => {
  try {
    dispatch({
      type: 'BEGIN_FAVORITES',
    });
    const response = await axios.get('https://microverse-jobs-api.herokuapp.com/api/v1/user-jobs', { headers: authHeader() });
    dispatch({
      type: 'SUCCESS_FAVORITES',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_FAVORITES',
      payload: error,
    });
  }
};

export const updateFav = (user_id, job_id) => axios.put(`https://microverse-jobs-api.herokuapp.com/api/v1/favorites/${job_id}`, { user_id, job_id }, { headers: authHeader() }) /*eslint-disable-line*/

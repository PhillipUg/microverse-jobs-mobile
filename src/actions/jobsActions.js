import Axios from 'axios';
import authHeader from './authActions';

export const getData = () => async dispatch => {
  try {
    dispatch({ type: 'BEGIN_JOBS' });
    const response = await Axios.get('https://microverse-jobs-api.herokuapp.com/api/v1/jobs', { headers: authHeader() });
    dispatch({
      type: 'SUCCESS_JOBS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_JOBS', payload: error });
  }
};

export const getJob = id => async dispatch => {
  try {
    dispatch({ type: 'BEGIN_JOB' });
    const response = await Axios.get(`https://microverse-jobs-api.herokuapp.com/api/v1/jobs/${id}`, { headers: authHeader() });
    dispatch({
      type: 'SUCCESS_JOB',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_JOB', payload: error });
  }
};

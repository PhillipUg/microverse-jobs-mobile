export const changeFilter = jobType => ({
  type: 'CHANGE_FILTER',
  jobType,
});

export const fetchJobs = () => dispatch => {
  dispatch({ type: 'FETCH_JOBS_BEGIN' });
  return fetch('https://api.allorigins.win/raw?url=http://jobs.github.com/positions.json?remote=true')
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'FETCH_JOBS_SUCCESS', data });
      return data;
    })
    .catch(err => dispatch({ type: 'FETCH_JOBS_ERROR', err }));
};

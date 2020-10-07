
export const changeFilter = (jobType) => ({
  type: 'CHANGE_FILTER',
  jobType,
})

export const fetchJobs = () => {
  return dispatch => {
    return fetch("https://api.allorigins.win/raw?url=http://jobs.github.com/positions.json?search=remote")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FETCH_JOBS", data })
        return data
      })
      .catch(err => console.log(err))
  }
}


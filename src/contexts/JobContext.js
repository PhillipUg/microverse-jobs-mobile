import React, { createContext, useState, useEffect } from 'react'
import authHeader from '../services/authHeader'

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState({ jobs: [] })

  useEffect(() => {
    fetch('https://microverse-jobs-api.herokuapp.com/api/v1/jobs', { headers: authHeader() })
      .then((res) => res.json())
      .then(data => setJobs({ jobs: data }))
  }, [])

  return (
    <JobContext.Provider value={{ ...jobs }}>
      {props.children}
    </JobContext.Provider>
  )
}
export default JobContextProvider;
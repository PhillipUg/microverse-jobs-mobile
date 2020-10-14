import React, { createContext, useState, useEffect } from 'react'
import authHeader from '../services/authHeader'
// import axios from 'axios'

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [state, setState] = useState({ jobs: [] })

  useEffect(() => {
    fetch('https://microverse-jobs-api.herokuapp.com/api/v1/jobs', { headers: authHeader() })
      .then((res) => res.json())
      .then(data => setState({ jobs: data }))
  }, [])

  return (
    <JobContext.Provider value={{ ...state }}>
      {props.children}
    </JobContext.Provider>
  )
}
export default JobContextProvider;
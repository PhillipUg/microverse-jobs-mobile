import React, { useEffect, useState } from 'react'
import JobTile from './JobTile'
import authHeader from '../services/authHeader';
import axios from 'axios'


const Favorites = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios.get('https://microverse-jobs-api.herokuapp.com/api/v1/user-jobs', { headers: authHeader() })
      .then(data => setJobs(data.data))
  }, [])

  return (
    <div>
      {jobs.map((job, index) => (
        <JobTile key={index} job={job} />
      ))}
    </div>
  )
}

export default Favorites

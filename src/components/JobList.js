import React, { useEffect, useState } from 'react';
import JobTile from './JobTile'
import { Redirect } from 'react-router-dom'
import AuthService from '../services/authService';
import authHeader from '../services/authHeader';


const JobList = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('https://microverse-jobs-api.herokuapp.com/api/v1/jobs', { headers: authHeader() })
      .then((res) => res.json())
      .then(data => setJobs(data))
  }, [])

  const user = AuthService.getCurrentUser();

  if (!user) return <Redirect to="/signin" />

  return (
    <div >
      {jobs && jobs.map((job, index) => (
        <JobTile key={index} job={job} />
      ))}
    </div>
  )

}

export default JobList;
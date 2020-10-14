import React, { useContext } from 'react';
// import NewJobForm from './NewJobForm';
import JobTile from './JobTile'
import { JobContext } from '../contexts/JobContext';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/authService';



const JobList = () => {
  // const initialFormState = {
  //   company: '',
  //   position: '',
  //   description: ''
  // }

  const { jobs } = useContext(JobContext)

  const user = AuthService.getCurrentUser();

  if (!user) return <Redirect to="/signin" />

  return (
    <div >
      {jobs.map((job, index) => (
        <JobTile key={index} job={job} />
      ))}
      {/* <NewJobForm addJob={addJob} initialFormState={initialFormState} /> */}
    </div>
  )

}

export default JobList;
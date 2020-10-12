import React, { useContext } from 'react';
import NewJobForm from './NewJobForm';
import JobTile from './JobTile'
import { JobContext } from '../contexts/JobContext';


const JobList = () => {
  const initialFormState = {
    company: '',
    position: '',
    description: ''
  }

  const { jobs, addJob, removeJob } = useContext(JobContext)

  return (
    <div style={{ color: 'white' }}>
      {jobs.map((job, index) => (
        <JobTile key={index} job={job} removeJob={removeJob} />
      ))}
      <NewJobForm addJob={addJob} initialFormState={initialFormState} />
    </div>
  )

}

export default JobList;
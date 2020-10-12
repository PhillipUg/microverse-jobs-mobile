import React, { useState } from 'react'

const NewJobForm = (props) => {
  const [job, setJob] = useState(props.initialFormState)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!job.company || !job.position || !job.description) return;
    props.addJob(job)
    setJob(props.initialFormState)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setJob({ ...job, [name]: value })
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Company</label>
      <input type="text" name="company" value={job.company} onChange={handleChange} ></input>
      <label>Position</label>
      <input type="text" name="position" value={job.position} onChange={handleChange} ></input>
      <label>Description</label>
      <input type="text" name="description" value={job.description} onChange={handleChange} ></input>
      <button>Create Job</button>
    </form>
  )
}

export default NewJobForm;
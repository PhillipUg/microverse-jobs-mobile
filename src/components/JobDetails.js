import React from 'react'
import { connect } from 'react-redux'

const JobDetails = ({ job }) => {
  return (
    <div>
      <img src={job[0].company_logo ? job[0].company_logo : "https://via.placeholder.com/700x500"} alt="company-logo" width="700"/>
      <p>{job[0].type}</p>
      <p>{job[0].url}</p>
      <p>{job[0].created_at}</p>
      <p>{job[0].company}</p>
      <p>{job[0].company_url}</p>
      <p>{job[0].location}</p>
      <p>{job[0].title}</p>
      <p>{job[0].description}</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    job: state.jobsReducer.jobs.filter(job => job.id === id)
  }
}


export default connect(mapStateToProps)(JobDetails)

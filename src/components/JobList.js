import React from 'react'
import JobTile from './JobTile'
import styles from './JobList.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



const JobList = ({ jobs }) => {
  return (
    <div className={styles.card_container}>
      {jobs && jobs.map(job => <Link to={'/jobs/' + job.id} key={job.id}> <JobTile job={job} /></Link>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}


export default connect(mapStateToProps)(JobList)

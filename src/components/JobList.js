import React from 'react'
import JobTile from './JobTile'
import styles from './JobList.module.css'


const JobList = () => {
  return (
    <div className={styles.card_container}>
      <JobTile />
      <JobTile />
      <JobTile />
      <JobTile />
      <JobTile />
      <JobTile />
      <JobTile />
    </div>
  )
}

export default JobList

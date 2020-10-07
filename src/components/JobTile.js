import React from 'react'
import styles from './JobTile.module.css'

const JobTile = ({ job }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={job.company_logo ? job.company_logo : "https://via.placeholder.com/100"} alt="company-logo" className={styles.company_logo} />
      </div>
      <div>{job.title}</div>
      <div>{job.type}</div>
      <div>
        <span>tags</span>
        <span>tags</span>
        <span>tags</span>
      </div>
      <div>
        <button>Apply</button>
        <button>Save</button>
      </div>
    </div>
  )
}


export default JobTile

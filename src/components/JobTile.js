import React from 'react'
import styles from './JobTile.module.css'

const JobTile = () => {
  return (
    <div className={styles.card}>
      <div>
        <img src="https://picsum.photos/64/64" alt="company-logo" />
      </div>
      <div>Job title</div>
      <div>Short description of the deisplayed job</div>
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

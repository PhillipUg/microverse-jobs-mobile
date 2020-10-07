import React from 'react'
import JobTile from './JobTile'
import styles from './JobList.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Filter from './Filter'
import { changeFilter, fetchJobs } from '../actions/index'




class JobList extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  handleFilter = (e) => {
    this.props.changeFilter(e.target.value)
  }

  render() {
    const { jobs, filter } = this.props
    let jobList;
    if (filter === 'All') {
      jobList = jobs.map(job => (
        <Link to={'/jobs/' + job.id} key={job.id}><JobTile job={job} key={job.id} /></Link>
      ));
    } else {
      jobList = jobs.filter(job => job.type === filter).map(job => (
        <Link to={'/jobs/' + job.id} key={job.id}><JobTile job={job} key={job.id} /></Link>
      ));
    }
    return (
      <div>
        <Filter handleFilter={this.handleFilter} />
        <div className={styles.card_container}>
          {jobList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    jobs: state.jobsReducer.jobs,
    filter: state.filterReducer
  }
}

const mapDispatchToFilter = (dispatch) => {
  return {
    changeFilter: (filter) => { dispatch(changeFilter(filter)) },
    fetchJobs: () => dispatch(fetchJobs())
  }
}



export default connect(mapStateToProps, mapDispatchToFilter)(JobList)

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import JobTile from './JobTile';
import styles from './JobList.module.css';
import Filter from './Filter';
import { changeFilter, fetchJobs } from '../actions/index';

class JobList extends React.Component {
  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  handleFilter = e => {
    const { changeFilter } = this.props;
    changeFilter(e.target.value);
  }

  render() {
    const {
      jobs, filter, error, loading,
    } = this.props;

    if (error) {
      return (
        <div className={styles.message}>
          Error!
          {error.message}
        </div>
      );
    }

    if (loading) {
      return <div className={styles.message}>Loading...</div>;
    }

    let jobList;
    if (filter === 'All') {
      jobList = jobs.map(job => (
        <JobTile job={job} key={job.id} />
      ));
    } else {
      jobList = jobs.filter(job => job.type === filter).map(job => (
        <JobTile job={job} key={job.id} />
      ));
    }
    return (
      <div>
        <div className={styles.filter}>
          <h1>Microverse Jobs</h1>
          <Filter handleFilter={this.handleFilter} />
        </div>
        <div className={styles.card_container}>
          {jobList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobsReducer.jobs,
  filter: state.filterReducer,
  error: state.jobsReducer.error,
  loading: state.jobsReducer.loading,
});

const mapDispatchToFilter = dispatch => ({
  changeFilter: filter => { dispatch(changeFilter(filter)); },
  fetchJobs: () => dispatch(fetchJobs()),
});

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  fetchJobs: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToFilter)(JobList);

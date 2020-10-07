import React from 'react'
import { connect } from 'react-redux';

const Filter = (props) => {
  const { filter, handleFilter } = props
  const jobTypes = [
    'Full Time',
    'Part Time',
    'Contract'
  ];
  const typeList = jobTypes.map(type => (
    <option key={Math.random()} value={type}>
      {type}
    </option>
  ));
  return (
    <select name="jobType" onChange={handleFilter} value={filter}>
      <option>
        {"All"}
      </option>
      {typeList}
    </select>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filterReducer
  }
}


export default connect(mapStateToProps)(Filter);
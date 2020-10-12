import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Filter = props => {
  const { filter, handleFilter } = props;
  const jobTypes = [
    'Full Time',
    'Part Time',
    'Contract',
  ];
  const typeList = jobTypes.map(type => (
    <option key={Math.random()} value={type}>
      {type}
    </option>
  ));
  return (
    <select name="jobType" onChange={handleFilter} value={filter}>
      <option>
        All
      </option>
      {typeList}
    </select>
  );
};

const mapStateToProps = state => ({
  filter: state.filterReducer,
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Filter);

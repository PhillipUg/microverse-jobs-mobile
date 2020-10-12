const filterReducer = (state = 'All', action) => {
  if (action.type === 'CHANGE_FILTER') {
    const newState = action.jobType;
    return newState;
  }
  return state;
};

export default filterReducer;

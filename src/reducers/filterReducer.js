const filterReducer = (state = "All", action) => {
  if (action.type === "CHANGE_FILTER") {
    return state = action.jobType
  } else {
    return state;
  }
};

export default filterReducer;
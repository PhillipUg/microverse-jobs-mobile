const initState = [];

const jobsReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SUCCESS_JOBS':
      return {
        ...state,
        jobs: payload
      }
    default:
      return state;
  }
}

export default jobsReducer;
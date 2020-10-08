const initState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_SUCCESS':
      return {
        ...state,
        loading: false,
        jobs: action.data,
      };
    case 'FETCH_JOBS_BEGIN':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_JOBS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    default:
      return state;
  }
};

export default jobsReducer;

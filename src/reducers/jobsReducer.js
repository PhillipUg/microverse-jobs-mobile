const initState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SUCCESS_JOBS':
      return {
        ...state,
        loading: false,
        jobs: payload,
      };
    case 'BEGIN_JOBS':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_JOBS':
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default jobsReducer;

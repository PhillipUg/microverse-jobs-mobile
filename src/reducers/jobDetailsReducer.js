const initState = {
  job: {},
  favorited: null,
  loading: false,
  error: null,
};

const jobDetailsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SUCCESS_JOB':
      return {
        ...state,
        loading: false,
        job: payload.job,
        favorited: payload.favorited,
      };
    case 'BEGIN_JOB':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_JOB':
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default jobDetailsReducer;


const initState = {
  jobs: [],
}

const jobsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_JOBS":
      return {
        ...state,
        loading: false,
        jobs: action.data
      }
    default:
      return state
  }
}

export default jobsReducer
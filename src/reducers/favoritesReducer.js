const initState = {
  favorites: [],
  loading: false,
  error: null,
};

const favoritesReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SUCCESS_FAVORITES':
      return {
        ...state,
        loading: false,
        favorites: payload,
      };
    case 'BEGIN_FAVORITES':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_FAVORITES':
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default favoritesReducer;

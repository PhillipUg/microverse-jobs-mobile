const user = JSON.parse(localStorage.getItem('user'));

const initState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const authReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    case 'AUTH_BEGIN':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;

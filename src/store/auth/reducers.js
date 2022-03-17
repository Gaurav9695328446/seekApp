import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  USER_IS_AUTHENTICATED,
} from './types';

const initialState = {
  loading: false,
  user: '',
  error: '',
  uid: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: '',
      };
    case LOGIN_USER_FAILURE:
      return {
        user: '',
        loading: false,
        error: action.payload,
      };
    case USER_IS_AUTHENTICATED:
      return {
        uid: action.payload,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};

export default authReducer;

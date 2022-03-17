import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from './types';

const initialState = {
  loading: false,
  user: '',
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: '',
      };
    case UPDATE_USER_FAILURE:
      return {
        user: '',
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  USER_IS_AUTHENTICATED,
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONSTANTS} from '../../utils/constants';
import FirebaseService from '../../services/firebase-service';
import {
  DEFAULT_ERROR_CALLBACK,
  DEFAULT_SUCCESS_CALLBACK,
} from '../../utils/toast';

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = user => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const loginUserFailure = error => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const userIsAuthenticated = uid => {
  return {
    type: USER_IS_AUTHENTICATED,
    payload: uid,
  };
};

export const loginUser = () => {
  return async dispatch => {
    dispatch(loginUserRequest());
    FirebaseService.getGoogleLoginInfo()
      .then(async data => {
        await AsyncStorage.setItem(CONSTANTS.USER_UID, data?.user?.email);
        dispatch(userIsAuthenticated(data?.user?.email));
        dispatch(loginUserSuccess(data?.user));
      })
      .catch(err => {
        DEFAULT_ERROR_CALLBACK(err?.message);
        dispatch(loginUserFailure(err?.message));
      });
  };
};

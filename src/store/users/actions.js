import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {CONSTANTS} from '../../utils/constants';
import {userIsAuthenticated} from '../auth/actions';
import {
  DEFAULT_ERROR_CALLBACK,
  DEFAULT_SUCCESS_CALLBACK,
} from '../../utils/toast';
import FirebaseService from '../../services/firebase-service';

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccess = user => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUserFailure = error => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const updateUser = userValues => {
  return async dispatch => {
    try {
      dispatch(updateUserRequest());

      const userId = await AsyncStorage.getItem(CONSTANTS.USER_UID);
      const deviceToken = await AsyncStorage.getItem(CONSTANTS.DEVICE_TOKEN);
      const userInfo = {
        ...userValues,
        deviceToken: deviceToken,
      };

      if (userId) {
        FirebaseService.updateUserInfoToServer(userId, userInfo)
          .then(async () => {
            dispatch(updateUserSuccess(userInfo));
            await AsyncStorage.setItem(
              CONSTANTS.USER_INFO,
              JSON.stringify(userInfo),
            );
            DEFAULT_SUCCESS_CALLBACK('User data is saved successfully');
          })
          .catch(err => {
            dispatch(updateUserFailure(err?.message));
            DEFAULT_ERROR_CALLBACK(err?.message);
          });
      } else {
        dispatch(userIsAuthenticated(''));
      }
    } catch (err) {
      const response = JSON.stringify(err);
      dispatch(updateUserFailure(response));
      DEFAULT_ERROR_CALLBACK('Something went wrong');
    }
  };
};

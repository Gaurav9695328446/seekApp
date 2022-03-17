import {ToastAndroid} from 'react-native';
import Snackbar from 'react-native-snackbar';

export const DEFAULT_ERROR_CALLBACK = error => {
  Snackbar.show({
    text: JSON.stringify(error),
    duration: Snackbar.LENGTH_LONG,
  });
};

export const DEFAULT_SUCCESS_CALLBACK = message => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
  });
};

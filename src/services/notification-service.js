import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {CONSTANTS} from '../utils/constants';

const NotificationService = {
  getDeviceToken: async () => {
    let deviceToken = await AsyncStorage.getItem(CONSTANTS.DEVICE_TOKEN);
    if (!deviceToken) {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log(fcmToken, 'token Data');
          await AsyncStorage.setItem(CONSTANTS.DEVICE_TOKEN, fcmToken);
        }
      } catch (err) {
        console.log(err, 'Token error message');
      }
    }
  },

  requestUserPermission: async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      NotificationService.getDeviceToken();
      console.log('Authorization status:', authStatus);
    }
  },

  notificationListener: async () => {
    messaging().onNotificationOpenedApp(async remoteMessage => {
      console.log(remoteMessage, 'recieved in background');
    });

    messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage, 'recieved in foreground');
    });

    messaging().getInitialNotification(async remoteMessage => {
      console.log(remoteMessage, 'recieved in foreground');
    });
  },
};

export default NotificationService;

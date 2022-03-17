import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthStackNavigator, HomeNavigator} from './navigation';
import {useDispatch, useSelector} from 'react-redux';
import {CONSTANTS} from './utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userIsAuthenticated} from './store/auth/actions';
import NotificationService from './services/notification-service';

export const Entry = () => {
  const {uid} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      NotificationService.requestUserPermission();
      let userId = await AsyncStorage.getItem(CONSTANTS.USER_UID);
      if (userId) {
        NotificationService.notificationListener();
        dispatch(userIsAuthenticated(userId));
      }
    };
    checkUserAuthentication();
  }, [uid]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {uid ? <HomeNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Entry;

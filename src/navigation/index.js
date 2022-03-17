import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/auth/login';
import Home from '../screens/home';
import {CONSTANTS} from '../utils/constants';
import {ROUTES} from '../utils/routes';

const HomeStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <AuthStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
        headerStyle: {
          backgroundColor: '#2e64e5',
          textAlign: 'center',
        },
      }}
      initialRouteName={ROUTES.HOME}>
      <HomeStack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          title: `${CONSTANTS.WELCOME_MSG}`,
        }}
      />
    </HomeStack.Navigator>
  );
};

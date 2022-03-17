/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Entry from './src';
import store from './src/store';
import {Provider} from 'react-redux';
import {CONSTANTS} from './src/utils/constants';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: CONSTANTS.WEB_CLIENT_ID,
    });
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.lighter}}>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <Entry />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

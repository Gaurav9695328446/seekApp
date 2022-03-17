import React from 'react';
import {View, Image, Platform, StyleSheet, ScrollView} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import SocialButton from '../../components/social-button';
import {loginUser} from '../../store/auth/actions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.authReducer.loading);

  const clickHandler = async () => {
    dispatch(loginUser());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/rn-social-logo.png')}
        style={styles.logo}
      />

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#ffffff"
            backgroundColor="#2e64e5"
            loading={isLoading}
            handleClick={clickHandler}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: heightPercentageToDP(3),
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});

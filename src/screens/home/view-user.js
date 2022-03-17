import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import FormButton from '../../components/form/form-button';
import FormLabel from '../../components/form/form-label';

const ViewUserScreen = () => {
  const {user} = useSelector(state => state.userReducer);

  // const onLogout = async () => {
  //   await AsyncStorage.removeItem(CONSTANTS.USER_UID);
  //   await AsyncStorage.removeItem(CONSTANTS.USER_INFO);
  //   dispatch(userIsAuthenticated(''));
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormLabel labelValue={'FullName'} value={user.fullName} />
      <FormLabel labelValue={'Age'} value={user.age} />
      {/* <FormButton buttonTitle={'Logout'} onPress={onLogout} /> */}
    </ScrollView>
  );
};

export default ViewUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: heightPercentageToDP(3),
    paddingBottom: heightPercentageToDP(15),
  },
});

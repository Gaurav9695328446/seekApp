import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import FirebaseService from '../../services/firebase-service';
import {
  updateUserFailure,
  updateUserRequest,
  updateUserSuccess,
} from '../../store/users/actions';
import AddUserScreen from './add-user';
import ViewUserScreen from './view-user';

const Home = () => {
  const dispatch = useDispatch();
  const {user, loading} = useSelector(state => state.userReducer);
  const {uid} = useSelector(state => state.authReducer);

  useEffect(() => {
    const getUserInfoFromFirebase = async () => {
      dispatch(updateUserRequest());
      await FirebaseService.getUserInfo(uid)
        .then(data => {
          dispatch(updateUserSuccess(data?._data));
        })
        .catch(err => {
          dispatch(updateUserFailure(err.response));
        });
    };
    getUserInfoFromFirebase();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'blue'} size="large" />
      </View>
    );
  }

  if (user?.fullName && user?.age) {
    return <ViewUserScreen />;
  }

  return <AddUserScreen />;
};

export default Home;

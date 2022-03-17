import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const FirebaseService = {
  getGoogleLoginInfo: async () => {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const response = await auth().signInWithCredential(googleCredential);
    return response;
  },

  updateUserInfoToServer: async (userId, userInfo) => {
    const response = await firestore()
      .collection('users')
      .doc(userId)
      .set(userInfo);
    return response;
  },

  getUserInfo: async uid => {
    const response = await firestore().collection('users').doc(uid).get();
    return response;
  },
};

export default FirebaseService;

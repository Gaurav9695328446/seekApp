import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import FormButton from '../../components/form/form-button';
import FormInput from '../../components/form/form-input';
import {updateUser} from '../../store/users/actions';
import {UserValidation} from '../../utils/validations';

const AddUserScreen = () => {
  const {loading} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(updateUser(data));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        validationSchema={UserValidation}
        initialValues={{fullName: '', age: ''}}
        onSubmit={values => onSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          dirty,
        }) => (
          <>
            <FormInput
              labelValue={'FullName'}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
              errors={errors?.fullName}
            />
            <FormInput
              labelValue={'Age'}
              keyboardType="numeric"
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              errors={errors?.age}
            />
            <FormButton
              buttonTitle={'Submit'}
              onPress={handleSubmit}
              loading={loading}
              disabled={!(isValid && dirty)}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: heightPercentageToDP(3),
    paddingBottom: heightPercentageToDP(15),
  },
});

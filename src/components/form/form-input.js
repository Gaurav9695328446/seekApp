import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/dimensions';

const FormInput = ({labelValue, errors, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{labelValue}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} numberOfLines={1} {...rest} />
      </View>
      {errors && <Text style={[styles.label, {color: 'red'}]}>{errors}</Text>}
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    width: '100%',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    textAlign: 'left',
    marginBottom: 10,
  },

  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
  },
});

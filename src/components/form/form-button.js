import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {windowHeight} from '../../utils/dimensions';

const FormButton = ({
  buttonTitle,
  loading = false,
  disabled = false,
  ...rest
}) => {
  const buttonStyle = {
    backgroundColor: disabled ? '#ddd' : '#2e64e5',
  };

  const buttonTxtStyle = {
    color: disabled ? '#747C7C' : '#ffffff',
  };

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyle]}
      disabled={disabled}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={'white'} />
      ) : (
        <Text style={[styles.buttonText, buttonTxtStyle]}>{buttonTitle}</Text>
      )}
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});

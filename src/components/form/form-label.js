import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {windowHeight} from '../../utils/dimensions';

const FormLabel = ({labelValue, value = '', placeholderText, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{labelValue}</Text>
      <View style={styles.labelContainer}>
        <Text style={styles.labelVal} {...rest}>
          {value}
        </Text>
      </View>
    </>
  );
};

export default FormLabel;

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 20,
    width: '100%',
    height: windowHeight / 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelVal: {
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
});

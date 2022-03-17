import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {windowHeight} from '../utils/dimensions';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  loading,
  handleClick,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      onPress={handleClick}
      {...rest}>
      {loading ? (
        <View style={styles.btnTxtWrapper}>
          <ActivityIndicator size="small" color={color} />
        </View>
      ) : (
        <>
          <View style={styles.iconWrapper}>
            <Icon name={btnType} style={styles.icon} size={22} color={color} />
          </View>
          <View style={styles.btnTxtWrapper}>
            <Text style={[styles.buttonText, {color: color}]}>
              {buttonTitle}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});

export default SocialButton;

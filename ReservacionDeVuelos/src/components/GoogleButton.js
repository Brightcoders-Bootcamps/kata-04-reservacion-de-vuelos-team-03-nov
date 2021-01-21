import React from 'react';
import {Text, TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import {windowHeight, windowWith} from '../utils/Dimensions';

const GoogleButton = ({buttonTitle, backgroundColor, color, ...rest}) => {
  let bgcolor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgcolor}]}
      {...rest}>
      <View style={styles.viewIconGoogle}>
        <Image
          style={styles.iconGoogle}
          source={require('../img/google.png')}
        />
      </View>
      <View style={styles.btnTxt}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '85%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewIconGoogle: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconGoogle: {
    height: 30,
    width: 30,
  },
  btnTxt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GoogleButton;

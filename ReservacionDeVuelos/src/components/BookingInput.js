import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight} from '../utils/Dimensions';
import colors from '../utils/Colors';

const BookingInput = ({placeHolderText}) => {
  return <TextInput placeholder={placeHolderText} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    height: windowHeight / 15,
    width: '90%',
    fontSize: 16,
    color: colors.black,
    borderColor: colors.gray,
    borderBottomWidth: 2,
    marginBottom: 150,
  },
});

export default BookingInput;

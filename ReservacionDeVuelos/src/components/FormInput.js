import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWith} from '../utils/Dimensions';
import colors from '../utils/Colors';
import IconEye from 'react-native-vector-icons/Entypo';

const FormInput = ({
  placeholderText,
  labelValue,
  secureTextEntry,
  source,
  ...rest
}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={labelValue}
          style={[styles.errorInput, labelValue && styles.input]}
          placeholder={placeholderText}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
      </View>
      <View style={[styles.containerIconError, labelValue && styles.containerIconEye]}>
        {source && (
          <TouchableOpacity style={styles.viewIconEye}>
            <IconEye name="eye" style={[styles.iconEyeError, labelValue && styles.iconEye]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 2,
    height: windowHeight / 15,
    borderColor: colors.black,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: 7,
  },
  input: {
    height: windowHeight / 15,
    marginBottom: 2,
    width: '100%',
    fontSize: 16,
    color: colors.black,
    borderColor: colors.blue,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  containerIconEye: {
    justifyContent: 'center',
    width: '15%',
    height: windowHeight / 15,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor:colors.blue,

  },
  viewIconEye: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconEye: {
    fontSize: 35,
    color: colors.blue,
  },
  iconEyeError:{
    fontSize: 35,
    color: colors.gray,
  },
  errorInput:{
    height: windowHeight / 15,
    marginBottom: 2,
    width: '100%',
    fontSize: 16,
    color: colors.black,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor:colors.black,
  },
  containerIconError: {
    justifyContent: 'center',
    width: '15%',
    height: windowHeight / 15,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor:colors.black,
  },
});

export default FormInput;

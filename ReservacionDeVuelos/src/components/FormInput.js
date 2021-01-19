import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {windowHeight, windowWith} from '../utils/Dimensions';
import colors from '../utils/Colors';

const FormInput = ({placeholderText, labelValue, secureTextEntry, source, ...rest}) => {
  let ruta = source;
  return (
    <View style={styles.Container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={labelValue}
          style={styles.input}
          placeholder={placeholderText}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <View style={styles.containerIconEye}>
        {ruta != undefined && (
          <TouchableOpacity style={styles.viewIconEye}>
            <Image style={styles.iconEye} source={ruta} />
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
    borderColor: colors.black,
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
  },
  viewIconEye: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconEye: {
    height: 30,
    width: 30,
  },
});

export default FormInput;

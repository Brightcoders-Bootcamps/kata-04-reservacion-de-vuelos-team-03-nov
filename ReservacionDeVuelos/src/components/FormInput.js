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

const FormInput = ({
  placeholderText,
  labelValue,
  secureTextEntry,
  source,
  ...rest
}) => {
  let ruta = source;

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          value={labelValue}
          style={styles.input}
          placeholder={placeholderText}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {ruta != undefined && (
        <TouchableOpacity style={styles.viewIconGoogle}>
          <Image style={styles.iconGoogle} source={ruta} />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    width: 332,
    marginBottom: 10,
    height: windowHeight / 15,
    borderColor: colors.black,
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: colors.black,
  },
  viewIconGoogle: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconGoogle: {
    height: 30,
    width: 30,
    marginLeft: 280,
    marginTop: -60,
  },
});

export default FormInput;

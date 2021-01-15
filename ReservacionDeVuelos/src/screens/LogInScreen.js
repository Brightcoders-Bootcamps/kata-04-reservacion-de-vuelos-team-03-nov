import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/Colors';
import contentText from '../utils/Constants';

const LogInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{contentText.logInTitle}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.goToSignIn}>{contentText.noAccount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
  },
  text: {
    fontSize: 20,
    color: colors.black,
    alignItems: 'center',
  },
  goToSignIn: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});

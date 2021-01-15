import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import contentText from '../utils/Constants';
import colors from '../utils/Colors';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {contentText.signInTitle} </Text>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.goToLogIn}> {contentText.haveAccount} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.black,
    alignItems: 'center',
  },
  goToLogIn: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SIGN IN SCREEN</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.goToLogIn}>Have an account? Sign In!</Text>
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
    color: 'black',
    alignItems: 'center',
  },
  goToLogIn: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

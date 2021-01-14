import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const LogInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOG IN SCREEN</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.goToSignIn}>
          Don't have an account? Create here!
        </Text>
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
  },
  text: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
  },
  goToSignIn: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

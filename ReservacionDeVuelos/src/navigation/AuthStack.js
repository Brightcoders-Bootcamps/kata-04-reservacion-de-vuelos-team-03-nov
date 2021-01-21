import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogInScreen from '../screens/LogInScreen';
import SignInScreen from '../screens/SignInScreen';
import {GoogleSignin} from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>    
  );
};

GoogleSignin.configure({
  webClientId: '515243727061-tv2r09p69r2gt1h2uckkhraq70ae8479.apps.googleusercontent.com"',
});

export default AuthStack;

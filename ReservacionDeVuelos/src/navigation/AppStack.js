import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WhereAreYou from './../screens/booking/WhereAreYou';
import WhereWillYou from './../screens/booking/WhereWillYou';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
    <Stack.Screen
        name="WhereAreYou"
        component={WhereAreYou}
        options={{header: () => null}}
      />
        <Stack.Screen
        name="WhereWillYou"
        component={WhereWillYou}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

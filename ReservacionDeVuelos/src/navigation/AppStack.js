import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WhereAreYou from './../screens/booking/WhereAreYou';
import WhereWillYou from './../screens/booking/WhereWillYou';
import TravelDate from './../screens/booking/TravelDate';
import HowManyPassengers from '../screens/booking/HowManyPassengers';

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
       <Stack.Screen
        name="TravelDate"
        component={TravelDate}
        options={{header: () => null}}
      />
       <Stack.Screen
        name="HowManyPassengers"
        component={HowManyPassengers}
        options={{header: () => null}}
      />
      <Stack.Screen
        name='RequestReceived'
        component={RequestReceived}
        options={{header: () => null}}
        />
    </Stack.Navigator>
  );
};

export default AppStack;

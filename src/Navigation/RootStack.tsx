import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackRoutes } from './Routes';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator<RootStackRoutes>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

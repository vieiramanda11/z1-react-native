import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackRoutes } from './Routes';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackRoutes>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackRoutes } from '../Navigation/Routes';

const DetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackRoutes, 'Details'>>();
  const { params } = route;
  const { title } = params;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default DetailsScreen;

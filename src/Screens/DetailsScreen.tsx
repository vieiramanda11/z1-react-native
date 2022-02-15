import React from 'react';
import { useQuery } from '@apollo/client';
import { ITEM_DETAIL_QUERY } from '../graphql/Queries';
import { Text, View } from 'react-native';

const DetailsScreen = () => {
  const { loading, error, data } = useQuery(ITEM_DETAIL_QUERY, {
    variables: { id: '4cd00c06-efac-48f9-88b9-d000c12c72cd' },
  });

  if (error) {
    console.log(error);
  }
  if (loading) {
    console.log(loading);
  }

  if (data) {
    console.log(data);
  }
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

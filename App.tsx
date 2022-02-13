/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, FlatList, View } from 'react-native';
import { Providers } from './src/Providers';
import { gql, useQuery } from '@apollo/client';

const ITEMS_QUERY = gql`
  query ITEMS {
    items {
      id
      title
      author
    }
  }
`;

const ItemsList = () => {
  const { data, loading } = useQuery(ITEMS_QUERY);

  return (
    <SafeAreaView>
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={data.items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Providers>
      <ItemsList />
    </Providers>
  );
};

export default App;

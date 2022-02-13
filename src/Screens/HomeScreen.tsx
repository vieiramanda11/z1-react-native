/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useQuery } from '@apollo/client';
import { ITEMS_QUERY } from '../graphql/Queries';
import BookItem from '../Components/BookItem';

const HomeScreen = () => {
  const ItemsList = () => {
    const { data, loading, error } = useQuery(ITEMS_QUERY);

    return (
      <SafeAreaView style={{ alignItems: 'center', padding: 30 }}>
        {error && <Text>{error}</Text>}
        {loading && <Text>Loading...</Text>}
        {data && (
          <FlatList
            data={data.items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <BookItem item={item} />}
          />
        )}
      </SafeAreaView>
    );
  };

  return <ItemsList />;
};

export default HomeScreen;

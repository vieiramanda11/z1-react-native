/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useQuery } from '@apollo/client';
import { ITEMS_QUERY } from '../graphql/Queries';
import BookItem from '../Components/BookItem';
import CategoriesButtons from '../Components/CategoriesButtons';
import { BookInterface } from '../../types';
import { categoriesList } from '../utils/categoriesList';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { data, loading, error } = useQuery(ITEMS_QUERY);

  const [itemFromCategories, setItemFromCategories] = useState(data?.items);

  const categories = categoriesList(data?.items);

  const filterCategory = (category: string) => {
    const filteredItems =
      category === 'All'
        ? data?.items
        : data?.items.filter((item: BookInterface) => {
            return item.category.title === category;
          });
    setItemFromCategories(filteredItems);
  };

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ alignItems: 'center', padding: 30 }}>
      {error && <Text>{error}</Text>}
      {loading && <Text>Loading...</Text>}
      {data && (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text>Detail</Text>
          </TouchableOpacity>
          <CategoriesButtons
            filterCategory={filterCategory}
            categories={categories}
          />
          <FlatList
            data={itemFromCategories || data?.items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <BookItem book={item} />}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

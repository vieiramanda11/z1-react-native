import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useQuery } from '@apollo/client';
import { ITEMS_QUERY } from '../graphql';
import CategoriesButtons from '../Components/CategoriesButtons';
import { BookInterface } from '../../types';
import { categoriesList } from '../utils/categoriesList';
import Loading from '../Components/Loading';
import BooksList from '../Components/BooksList';
import Title from '../Components/Title';

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

  return (
    <SafeAreaView style={styles.container}>
      {error && <Text>{error}</Text>}
      {loading && <Loading />}
      {data && (
        <>
          <Title />
          <CategoriesButtons
            filterCategory={filterCategory}
            categories={categories}
          />
          <BooksList data={itemFromCategories || data?.items} />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#362e6b',
  },
});

export default HomeScreen;

import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { RootStackRoutes } from '../Navigation/Routes';
import BookItem from './BookItem';

const BooksList = ({ data }: any) => {
  const navigation = useNavigation<NavigationProp<RootStackRoutes>>();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      numColumns={2}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <BookItem
          index={index}
          book={item}
          onPress={() =>
            navigation.navigate('Details', {
              title: item.title,
              author: item.author,
              content: item.content,
              category: item.category.title,
            })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default BooksList;

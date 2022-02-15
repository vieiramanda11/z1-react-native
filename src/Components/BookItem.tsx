/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { BookInterface } from '../../types';

interface BookInterfaceProps {
  book: BookInterface;
}

const BookItem = ({ book }: BookInterfaceProps) => {
  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 5,
      }}>
      <Text>{book.title}</Text>
      <Text>{book.category.title}</Text>
    </View>
  );
};

export default BookItem;

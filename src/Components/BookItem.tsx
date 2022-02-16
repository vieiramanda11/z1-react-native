/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BookInterface } from '../../types';

interface BookInterfaceProps {
  book: BookInterface;
  onPress: Function;
}

const BookItem = ({ book, onPress }: BookInterfaceProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 5,
        width: '50%',
      }}>
      <Text>{book.title}</Text>
      <Text>{book.category.title}</Text>
    </TouchableOpacity>
  );
};

export default BookItem;

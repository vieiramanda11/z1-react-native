/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

interface Item {
  title: string;
}

interface ItemProps {
  item: Item;
}

const BookItem = ({ item }: ItemProps) => {
  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 5,
      }}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default BookItem;

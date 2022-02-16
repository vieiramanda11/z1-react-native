import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BookInterface } from '../../types';

interface BookInterfaceProps {
  book: BookInterface;
  onPress: Function;
  index: number;
}

const BookItem = ({ book, onPress, index }: BookInterfaceProps) => {
  return (
    <View style={[styles.container, index % 2 === 0 && styles.marginRight]}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image
          source={require('../images/mindfulness.jpg')}
          style={styles.image}
        />
        <Text style={styles.textCategory}>{book.category.title}</Text>
        <Text style={styles.text}>{book.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '48%',
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#5b4a86',
  },
  image: {
    width: '100%',
    height: 100,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  textCategory: {
    color: '#d5d086',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    color: '#d8edf8',
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  marginRight: {
    marginRight: 10,
  },
});

export default BookItem;

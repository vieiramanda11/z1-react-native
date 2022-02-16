import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BookInterface } from '../../types';

const BookDetails = ({ title, author, content, category }: BookInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCategory}>{category}</Text>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textAuthor}>{author}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textContent}>{content}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCategory: {
    color: '#d5d086',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  textTitle: {
    color: '#d8edf8',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textAuthor: {
    color: '#d8edf8',
    marginBottom: 10,
  },
  textContent: {
    color: '#d8edf8',
    marginVertical: 30,
  },
});
export default BookDetails;

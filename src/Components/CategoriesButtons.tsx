import React from 'react';
import { TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';

interface CategoriesButtonsProps {
  categories: string[];
  filterCategory: Function;
}

const CategoriesButtons = ({
  categories,
  filterCategory,
}: CategoriesButtonsProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category: string) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              filterCategory(category);
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 15,
    backgroundColor: '#a183c8',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d8edf8',
  },
});

export default CategoriesButtons;

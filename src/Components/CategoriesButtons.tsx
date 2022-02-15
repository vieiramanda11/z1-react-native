/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, ScrollView, Text } from 'react-native';

interface CategoriesButtonsProps {
  categories: string[];
  filterCategory: Function;
}

const CategoriesButtons = ({
  categories,
  filterCategory,
}: CategoriesButtonsProps) => {
  return (
    <ScrollView horizontal>
      {categories.map((category: string) => {
        return (
          <TouchableOpacity
            key={category}
            onPress={() => {
              filterCategory(category);
            }}
            style={{ padding: 5 }}>
            <Text>{category}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesButtons;

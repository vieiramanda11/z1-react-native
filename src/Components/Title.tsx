import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = () => {
  return <Text style={styles.text}>Learn</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#d8edf8',
    fontWeight: 'bold',
  },
});

export default Title;

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootStackRoutes } from '../Navigation/Routes';
import BookDetails from '../Components/BookDetails';

const DetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackRoutes, 'Details'>>();
  const { params } = route;
  const { title, content, author, category } = params;

  const navigation = useNavigation<NavigationProp<RootStackRoutes>>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>{'< Back'}</Text>
      </TouchableOpacity>
      <BookDetails
        title={title}
        content={content}
        author={author}
        category={category}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#362e6b',
    flex: 1,
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d8edf8',
    marginVertical: 20,
  },
});

export default DetailsScreen;

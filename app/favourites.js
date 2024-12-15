import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

const FavoritesScreen = ({ route }) => {
  const { favorites } = route.params || [];
  const navigation = useNavigation();

  const renderFavoriteRecipe = ({ item }) => (
    <View style={styles.recipeCard}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => navigation.push('recipe/[id]', { id: item.id })}
      >
        <Text style={styles.viewText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.text}>You have no favorite recipes.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFavoriteRecipe}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  recipeCard: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewButton: {
    marginTop: 10,
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
  },
  viewText: {
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    color: '#333',
  },
});

export default FavoritesScreen;

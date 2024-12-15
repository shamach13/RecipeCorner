import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import axios from 'axios';
import Layout from '../components/Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Import icon library

const RecipeListScreen = () => {
  const { category } = useLocalSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch`,
          {
            params: {
              apiKey: '4aae7022587e461a8107c1ebe8f76160', // Replace with your Spoonacular API key
              type: category.toLowerCase(),
              number: 10,
            },
          }
        );
        const fetchedRecipes = response.data.results;
        setRecipes(fetchedRecipes);
        setFilteredRecipes(fetchedRecipes);
        cacheRecipes(fetchedRecipes); // Cache recipes
      } catch (error) {
        console.error('Error fetching recipes:', error);
        loadCachedRecipes(); // Load cached recipes in case of error
      } finally {
        setLoading(false);
      }
    };

    const loadFavorites = async () => {
      try {
        const favoritesData = await AsyncStorage.getItem('favorites');
        if (favoritesData) {
          setFavorites(JSON.parse(favoritesData));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };

    fetchRecipes();
    loadFavorites(); // Load favorite recipes from AsyncStorage
  }, [category]);

  // Save recipes to AsyncStorage (cache)
  const cacheRecipes = async (recipes) => {
    try {
      await AsyncStorage.setItem('recipes', JSON.stringify(recipes));
    } catch (error) {
      console.error('Error caching recipes:', error);
    }
  };

  // Load cached recipes if available
  const loadCachedRecipes = async () => {
    try {
      const cachedData = await AsyncStorage.getItem('recipes');
      if (cachedData) {
        setRecipes(JSON.parse(cachedData));
        setFilteredRecipes(JSON.parse(cachedData));
      }
    } catch (error) {
      console.error('Error loading cached recipes:', error);
    }
  };

  // Search function
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  // Save a recipe as favorite
  const saveFavorite = async (recipe) => {
    const newFavorites = [...favorites, recipe];
    setFavorites(newFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  // Remove a recipe from favorites
  const removeFavorite = async (recipe) => {
    const newFavorites = favorites.filter((fav) => fav.id !== recipe.id);
    setFavorites(newFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  // Check if a recipe is in favorites
  const isFavorite = (recipe) => {
    return favorites.some((fav) => fav.id === recipe.id);
  };

  // Recipe item component
  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={() => router.push(`/recipe/${item.id}`)} // Navigate to recipe details
    >
      <Text style={styles.recipeTitle}>{item.title}</Text>
      {item.image && <Image source={{ uri: item.image }} style={styles.recipeImage} />}
      {item.rating && <Text style={styles.rating}>Rating: {item.rating}</Text>}
      
      <TouchableOpacity
        onPress={() => isFavorite(item) ? removeFavorite(item) : saveFavorite(item)}
        style={styles.favoriteButton}
      >
        <MaterialIcons
          name={isFavorite(item) ? 'favorite' : 'favorite-border'}
          size={24}
          color={isFavorite(item) ? 'red' : '#ccc'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading recipes...</Text>
      </View>
    );
  }
  return (
    <Layout>
      <TextInput
        style={styles.searchBar}
        placeholder="Search recipes..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Text style={[styles.heading, { textAlign: 'center' }]}>{category.toUpperCase()} RECIPES</Text>

      <FlatList
        data={searchQuery ? filteredRecipes : recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRecipe}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.text}>No recipes found for "{searchQuery}".</Text>
        }
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  recipeCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  rating: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  favoriteButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default RecipeListScreen;

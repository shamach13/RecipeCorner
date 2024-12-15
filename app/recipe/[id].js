import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import Layout from '../components/Layout';
import { useLocalSearchParams } from 'expo-router';

const RecipeDetailScreen = () => {
  const { id } = useLocalSearchParams(); // Get recipe ID from route
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: {
            apiKey: '4aae7022587e461a8107c1ebe8f76160', // Replace with your Spoonacular API key
          },
        });
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Loading recipe details...</Text>
      </View>
    );
  }

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <Layout>
      {recipe && (
        <ScrollView style={styles.container}>
          <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          <Text style={styles.sectionTitle}>Ingredients:</Text>
          {recipe.extendedIngredients.map((ingredient) => (
            <Text key={ingredient.id}>{ingredient.original}</Text>
          ))}
          <Text style={styles.sectionTitle}>Instructions:</Text>
          <Text>{recipe.instructions}</Text>
        </ScrollView>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  recipeImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  recipeTitle: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  text: { fontSize: 16, lineHeight: 24 },
});

export default RecipeDetailScreen;

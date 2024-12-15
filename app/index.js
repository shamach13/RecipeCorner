import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Layout from '../components/Layout';  // Adjust path accordingly
import { useRouter } from 'expo-router';

const categories = ['Appetite', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Evening Snacks', 'Beverages'];

const HomeScreen = () => {
  const router = useRouter();

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => router.push(`/recipes/${item.toLowerCase()}`)}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <Layout>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={renderCategory}
        contentContainerStyle={styles.list}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, 
    backgroundColor: '#fff',
    justifyContent: 'center',  // This centers the content vertically 
    },
  list: { padding: 20 },
  categoryCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryText: { fontSize: 18, fontWeight: 'bold' },
});

export default HomeScreen;

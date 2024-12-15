import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';  // Adjust the path based on your file structure

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 20, // Add padding at the top
    paddingBottom: 20, // Add padding at the bottom
    paddingHorizontal: 10, // Optional: Add horizontal padding
  },
});

export default Layout;

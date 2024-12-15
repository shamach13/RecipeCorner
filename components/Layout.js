import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';  // Adjust the path based on your file structure

const Layout = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <View style={styles.content}>
        {children} {/* Render the page content passed as children */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 10,
  },
});

export default Layout;
